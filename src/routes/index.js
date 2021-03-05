const userRouter = require('./user');
const updateProfileRouter = require('./updateProfile');
const googleRouter = require('./googleAuth');
const facebookRouter = require('./facebookAuth');
const listRouter = require('./listRouter');
const cardRouter = require('./cardRouter');



module.exports = {
    userRouter,
    updateProfileRouter,
    googleRouter,
    facebookRouter,
    listRouter,
    cardRouter
};
