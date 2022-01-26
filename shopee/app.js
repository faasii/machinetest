const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
require('./config/db')

const app = express();

const { auth } = require('express-openid-connect');
const productRouter = require('./routes/product');
app.use('/api/', productRouter);


// /const authConfig = require('./config/auth')

// app.use(authConfig)
app.use(
    auth({
        authRequired: true,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET,
        // idpLogout:  process.env.,
    })
);



//const usersRouter = require('./routes/auth');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//app.use('/', usersRouter);

module.exports = app;
