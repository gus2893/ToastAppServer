const mongoose = require('mongoose')
//const keys = require('../config/keys')

mongoose.connect("mongodb+srv://dbAdmin:vmA6NSbMid4RPzbs@survy-cluster-qyapy.mongodb.net/blumToasts?retryWrites=true",{
    useNewUrlParser: true
})

const db = mongoose.connection
module.exports = db