const Movies = require('../models/movies');


const movieControl = {
    create: async (req, res) => {

        try {
            const newMovie = await new Movies(req.body).save();
            res.status(200).json({ msg: `${newMovie.movieName} movie has been created` })

        } catch (error) {
            return res.status(400).json({ err: error });
        }
    },
    list: async (req, res) => {
        try {
            const movies = await Movies.find()

            res.json(movies);
        } catch (error) {
            return res.status(400).json({ err: error });
        }
    },
    update: async (req, res) => {


        try {
            const movie = await Movies.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();

            return res.status(200).json({ msg: `${movie.movieName} has been updated ` });

        } catch (error) {
            return res.status(400).json({ err: error });
        }
    },
    delete: async (req, res) => {

        try {
            const { id } = req.params;
            const dlt = await Movies.findOneAndDelete({ _id: id }).exec();
            res.json({ msg: `${dlt.movieName} has been deleted` });

        } catch (error) {

            return res.status(400).json({ err: error });
        }
    },

    listById: async (req, res) => {

        const { id } = req.params;
        try {
            const movie = await Movies.findById({ _id: id }).exec();

            res.json(movie);

        } catch (error) {
            console.log(error)
            return res.status(400).json({ err: error });
        }
    }
}

module.exports = movieControl