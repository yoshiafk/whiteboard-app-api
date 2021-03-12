const router = require('express').Router();

const {
  validation,
  verification,
  authentication,
  forgotResetPassword,
  updatePassword,
  upload
} = require('../middlewares');
const updateProfile = require('../controllers/updateProfile');


router
    .route('/profile')
    .get(verification, updateProfile)
    .patch(verification, validation.updateValidation, upload.single('photo'), updateProfile);


module.exports = router;
