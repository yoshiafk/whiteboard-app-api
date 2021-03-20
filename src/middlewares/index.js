const validation = require('./validation');
const verification = require('./verification');
const authentication = require('./authentication');
const forgotResetPassword = require('./forgotResetPass');
const updatePassword = require('./updatePass');
const upload = require('./uploadImage');

module.exports = {
    validation,
    verification,
    authentication,
    forgotResetPassword,
    updatePassword,
    upload
}