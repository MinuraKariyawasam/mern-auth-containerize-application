const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type:String
    },
    password: {
        type:String
    }
});

module.exports = mongoose.model('user',user)