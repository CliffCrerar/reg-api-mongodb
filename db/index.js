/**
 * DB
 */
const util = require('util');
const mongoose = require('mongoose')
util.log('-> Init DB')
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})