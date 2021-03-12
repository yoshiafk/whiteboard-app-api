const router = require('express').Router();
const passport = require('passport');

const { signToken, cookieOptions} = require('../services/auth');


//Auth using google account
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/redirect', passport.authenticate('facebook'), async (req, res) => {
<<<<<<< HEAD
    
    const { id, name, email } = req.user;
    const token = signToken(id, name, email);

=======
    //res.send(req.user)
    // console.log(req.user);
   // const token = signToken(req.user.id);
    const { id, name, email } = req.user;
    const token = signToken(id, name, email);
>>>>>>> ec65912521a641a4eba945529f8a824a0ab8e8fa
    //Stuff JWT into the cookie
    res.cookie('jwt', token, cookieOptions);
    res.status(200).json({
        status: 'success',
        message: `Welcome to WHITEBOARD, ${req.user.name}`,
        data: req.user,
        token
    });
});
    


module.exports = router;