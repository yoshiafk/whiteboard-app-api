const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const pug = require('pug');

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN, EMAIL_FROM } = process.env;
const User = require('../models/userModel');
const { signToken, cookieOptions} = require('../services/auth');

//Purpose: reset password by asking first if user forgot password

const forgotPassword = async (req, res, next) => {

    //1. Get user based on POSTed email
    const userExist = await User.findOne({ email: req.body.email, active: { $ne: false }});
    
    if(!userExist) {
        return res.status(404).json({status: 'failed', message: 'This user does not exist.'});
    }

    //2. Generate the random token which is gonna be sent to the user's email
    //Unencrypted plain text token sent via email
    const resetToken = crypto.randomBytes(32).toString('hex'); 

    //Doesnt need to be hashed using bcrypt. less likely to be attacked
    //Save in database
    userExist.reset_password_token = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    userExist.reset_password_expires = Date.now() + 120 * 60 * 1000; //now + 120 min in ms
    
    await userExist.save((err, user) => {
        if(err) return res.send(err)
    });

    //3. Send it to user's email using node mailer
    const resetURL = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;

    try {

        const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
        oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

        async function sendMail(name, email, url) {
            //Get access token
            const accessToken = await oAuth2Client.getAccessToken();

            //Create nodemailer function
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: EMAIL_FROM,
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            });

            //Render HTML based on PUG template
            const html = pug.renderFile('/home/upis/Coding/final-project/whiteboard-signup/views/resetPass.pug', {
                name: name,
                url
            });

            const mailOptions = {
                from: `Whiteboard Team <${EMAIL_FROM}>`,
                to: email,
                subject: 'Reset your WHITEBOARD account password',
                html
            };

            //Send email
            const result = await transport.sendMail(mailOptions);
            return result               
        };

        sendMail(userExist.name, userExist.email, resetURL).then(result => {
            console.log('Email is sent...', result);
        }).catch(error => console.log(error.message));
    
        res.status(200).json({
            status: 'success',
            message: `Link to reset your password was sent to your email. That only lasts for 2 hour.`
        });
    } catch (err) {
        // console.log(err);
        userExist.reset_password_token = undefined;
        userExist.reset_password_expires = undefined;

        await userExist.save();
        next('Ooops something wrong while sending an email');
    }
}

const resetPassword = async (req, res, next) => {
    
    //1. Get user based on the token
    //Encrypt the token from user's email with crypto to compare with the reset_password_token in DB
    try {

        const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');

        const userExist = await User.findOne({
            reset_password_token: hashedToken,
            reset_password_expires: { $gt: Date.now() }
        });
        // console.log(userExist);

        //2. Reset password only if the token has not expired
        //If token has expired, it will not send userExist
        if(!userExist) {
            return res.status(400).json({status: 'failed', message: 'Link has expired'});
        }
        userExist.password = req.body.password;
        
        //Delete reset_password_token and reset_password_expires
        userExist.reset_password_token = undefined;
        userExist.reset_password_expires = undefined;
        await userExist.save();

        //3. Update reset_password field -> define as 'pre save()' in userModel


        //4. Log the user in by sending JWT token
        //Generate TOKEN
        const token = signToken(userExist._id);

        //Stuff JWT into the cookie
        res.cookie('jwt', token, cookieOptions);

        res.status(200).json({
            status: 'success',
            message: `Hi ${userExist.name}, your password has been successfully updated`,
            token
        }); 
    } catch (err) {
        console.log(err);
        next('Ooops something wrong while sending an email');
    }
}

module.exports = {
    forgotPassword,
    resetPassword
};