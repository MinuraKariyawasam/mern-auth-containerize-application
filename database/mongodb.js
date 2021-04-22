const mongoose = require('mongoose');

const uri = 'mongodb+srv://aayu:aayu@cluster0.gjske.mongodb.net/auth?retryWrites=true&w=majority'

const connectDB = async () => {
    await mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected');
}

module.exports = connectDB;