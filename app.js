// ==================================
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan'); //logger activity
const cors = require('cors');
const compression = require('compression');
const passport = require('passport');
const cookieSession = require('cookie-session');

const router = require('./src/routes');
const GoogleSetup = require('./src/services/googleAuth');
const FacebookSetup = require('./src/services/facebookAuth');
const apiRoutes = require ('./src/routes/api-route')
const labelRoutes = require("./src/routes/routes")

const commentRoutes = require("./src/routes/commentRouter")

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); //logger only runns in the development environment
}

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(compression());
// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000, //max age cookie we sent (1day) in ms
//     keys: process.env.COOKIE_KEY //encrypt the cookie
// }));

//Initialize passport
app.use(passport.initialize());
app.use(passport.session()); //to control the logging in session

//ROUTES
app.use(router.userRouter);
app.use(router.googleRouter);
app.use(router.facebookRouter);
app.use(router.updateProfileRouter);
//dhms
app.use('/api', apiRoutes);

//tamam
app.use(labelRoutes())
app.use(commentRoutes())

//adryan
app.use(router.listRouter);
app.use(router.cardRouter);
// app.get('/', (req, res) => {
//     res.render("login")
// });


module.exports = app;
