const express = require('express');
const router = express.Router();

import { newMovie } from '../controllers/movieController';

router.route('/').post(newMovie);

export default router;