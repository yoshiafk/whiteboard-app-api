const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan'); //logger activity
const cors = require('cors');
const compression = require('compression');
const passport = require('passport');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

const router = require('./src/routes');
const GoogleSetup = require('./src/services/googleAuth');
const FacebookSetup = require('./src/services/facebookAuth');

const app = express();
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); //logger only runns in the development environment
}

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //max age cookie we sent (1day) in ms
    keys: process.env.COOKIE_KEY //encrypt the cookie
}));
app.use(methodOverride('_method'));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session()); //to control the logging in session

//ROUTES
app.use(router.userRouter);
app.use(router.googleRouter);
app.use(router.facebookRouter);
app.use(router.updateProfileRouter);

// app.get('/', (req, res) => {
//     res.render("login")
// });


//ROUTE HANDLER FOR UNDEFINED.Place at the bottom!!
// app.use('*', (req, res, next) => {
//     res.status(404).json({
//         status: 'fail',
//         message: `Can not find ${req.originalUrl}`
//     });
// });

module.exports = app;