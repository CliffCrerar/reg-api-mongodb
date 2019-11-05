// import dotenv from 'dotenv';
/**
 * APP
 */
const util = require('util');
const dotenv = require('dotenv');
util.log('-> Init ENV VARS');
dotenv.config();
require('./db') // initialize mongoose and connect to db
process.env.NODE_PATH = __dirname;
const
    express = require('express'),
    cors = require('cors'),
    fs = require('fs'),
    path = require('path'),
    userRouter = require('./routers/user'),
    port = process.env.PORT,
    morgan = require('morgan'),
    app = express(),
    os= require('os');
    log =require('./logs');
    host = process.env.NODE_ENV==='development'?process.env.HOST:os.hostname(),
    loggingConf = fs.readFileSync(path.join(__dirname,'logs/.conf'),'utf8');

// console.log(process);
util.log(`Running in ${process.env.NODE_ENV} mode`);
app.all('*',log)
app.use(morgan(loggingConf));
app.use(cors());
app.use(express.json());
app.use(userRouter);



if(process.env.NODE_ENV==='development'){
    app.listen(port, () => {
        console.log(`### --> Development Server running on port ${host}:${port}`);
    })
} else {
    module.exports = app;
}

