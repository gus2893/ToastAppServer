const mongoose = require('mongoose')

const toastSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim:true
    },
    URL: {
        type: String,
        trim:true
    },
}, {
    timestamps: true
})

const Toast = mongoose.model('toast', toastSchema)

module.exports = Toast