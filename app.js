// @ts-nocheck
// import dotenv from 'dotenv';
/**
 * APP
 */
require('dotenv').config();
require('util').log('-> Init ENV VARS');
require('./db') // initialize mongoose and connect to db
process.env.NODE_PATH = __dirname;
const
    express = require('express'),
    cors = require('cors'),
    fs = require('fs'),
    path = require('path'),
    userRouter = require('./routers/user'),
    morgan = require('morgan'),
    app = express(),
    os= require('os'),
    log =require('./logs'),
    loggingConf = fs.readFileSync(path.join(__dirname,'logs/.conf'),'utf8');
let
    port = process.env.PORT,
    host = process.env.NODE_ENV==='development'?process.env.HOST:os.hostname();

// console.log(process);

console.log(`Running in ${process.env.NODE_ENV} mode`);
app.all('*',log)
app.use(morgan(loggingConf));
app.use(cors());
app.use(express.json());
app.use(userRouter);

if(process.env.NODE_ENV==='development'){
    app.listen(port,host, () => {
        console.log(`### --> Development Server running on port ${host}:${port}`);
    })
} else {
    exports.authUserApi = app;
}