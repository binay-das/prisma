const prisma = require('../db/db.config.js');

const index = async (req, res) => {
    const movies = await prisma.movie.findMany();
    return res.status(200).json(movies);
}

const newMovie = async (req, res) => {
    const {title} = req.body;
    const movie = await prisma.movie.create({
        data: {
            title,
        },
    });

    return res.status(200).json("Movie added successfully")
}

module.exports = {
    index,
    newMovie
}