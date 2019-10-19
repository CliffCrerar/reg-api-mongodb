/**
 * APP
 */

require('./db') // initialize mongoose and connect to db
process.env.NODE_ENV = __dirname;
const
    express = require('express'),
    fs = require('fs'),
    path = require('path'),
    loggingConf = fs.readFileSync(path.join(__dirname,'logs/.conf'),'utf8'),
    userRouter = require('./routers/user'),
    port = process.env.PORT,
    morgan = require('morgan'),
    app = express();

//console.log('process.stdout: ', process.stdout.write());
   
app.use(morgan(loggingConf));
app.use(express.json());
app.use(userRouter);

exports.authuserApi = app;