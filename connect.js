const mongoose = require('mongoose');


const url = `${process.env.MONGO_URL}`;


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbConfig = mongoose.connection;

dbConfig.on('error', () => console.log('Mongo not connected'));

dbConfig.on('connected', () => console.log('Mongo connected'));


module.exports = mongoose;