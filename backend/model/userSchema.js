const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    dfname: {
        type: String,

    },
    dlname: {
        type: String,

    },
    dmail: {
        type: String,

    },
    dmobile: {
        type: Number,

    },
    duniname: {
        type: String,

    },
    dfromuni: {
        type: String,

    },
    dtouni: {
        type: String,

    },
    dcgpa: {
        type: String,

    },
    dcity: {
        type: String,

    },
    dproject: {
        type: String,

    },
    dprofrom: {
        type: String,

    },

    dproto: {
        type: String,

    },
    dmentor: {
        type: String,

    },
    ddesc: {
        type: String,

    }

})

const User = mongoose.model('USER', userSchema);

module.exports = User;