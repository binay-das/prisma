const express = require('express');
const router = express.Router();

const { index, newMovie } = require('../controllers/movieController');

router.route('/').get(index).post(newMovie);

module.exports = router;