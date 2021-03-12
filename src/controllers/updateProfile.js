const mongoose = require('mongoose');

const cloudinary = require('../services/cloudinary');
const { signToken, cookieOptions} = require('../services/auth');
const User = require('../models/userModel');


//Helper to loop through body to restrict only allowed fields
const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => { //array
        if(allowedFields.includes(el)) newObj[el] = obj[el]
    });
    return newObj; 
}

const updateProfile = async (req, res) => {

    let userExist = req.user;

    //1. Create error end point if user tries to POST password data
    if(req.body.password || req.body.user_status) return res.status(400).json({
        status: 'failed',
        message: 'This route is not for the intented purpose.'
    });

   try {
        //2. Update user's profile
        //Filter the input body
        const filteredBody = filterObj(req.body, 'name', 'email', 'role', 'industry', 'company_name');

        if(filteredBody) {

            userExist = await User.findByIdAndUpdate(userExist.id, filteredBody, {
                new: true, //to show the new data
                runValidators: true
            });
        }

        if(req.file) {
            const photoUploaded = await cloudinary.uploader.upload(req.file.path, {
                folder: 'whiteboard-users',
                public_id: userExist.slug,
                unique_filename: false,
                transformation: [
                {width: 200, height: 200, crop: "thumb"}
                ],
            });

            userExist.photo = photoUploaded.secure_url;
            await userExist.save();
        }

        //Generate TOKEN
        const token = signToken(userExist.id, userExist.name, userExist.email);

        //Stuff JWT into the cookie
        res.cookie('jwt', token, cookieOptions);

        res.status(200).json({
            status: 'success',
            token,
            data: userExist
        })
   } catch (err) {
       res.status(400).json({
        status: 'failed', 
        message: `Ooops, ${err.message}`});
   }  
}

module.exports = updateProfile;