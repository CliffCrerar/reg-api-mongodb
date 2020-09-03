/**
 * DB
 */
const util = require('util');
const mongoose = require('mongoose')
util.log('-> Init DB')

console.log('process.env.MONGODB_URL: ', process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})