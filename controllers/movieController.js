const prisma = require('../db/db.config.js');

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
    newMovie
}