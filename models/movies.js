const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
        unique: true
    },
    cast: {
        type: Array,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    release: {
        type: Date,
        required: true
    },
    gener: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

const movieModel = mongoose.model('movies', movieSchema);

module.exports = movieModel;