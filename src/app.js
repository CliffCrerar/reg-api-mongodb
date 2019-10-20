/**
 * APP
 */

require('./db') // initialize mongoose and connect to db
process.env.NODE_PATH = __dirname;
const
    express = require('express'),
    cors = require('cors'),
    fs = require('fs'),
    path = require('path'),
    loggingConf = fs.readFileSync(path.join(__dirname,'logs/.conf'),'utf8'),
    userRouter = require('./routers/user'),
    port = process.env.PORT,
    morgan = require('morgan'),
    app = express(),
    os= require('os');
    host = process.env.NODE_ENV==='development'?process.env.HOST:os.hostname();

//console.log('process.stdout: ', process.stdout.write());
   
app.use(morgan(loggingConf));
app.use(cors())
app.use(express.json());
app.use(userRouter);

if(process.env.NODE_ENV==='development'){
    app.listen(port, () => {
        console.log(`### --> Development Server running on port ${host}${port}`);
    })
} else {
    module.exports = app;
}

