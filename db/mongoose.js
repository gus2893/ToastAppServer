const mongoose = require('mongoose')
const keys = require('../config/keys')

mongoose.connect(keys.mongoURI,{
    useNewUrlParser: true
})

const db = mongoose.connection
module.exports = db