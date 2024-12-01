const express = require('express');
const router = express.Router();

const movieRoutes = require('./movieRoutes');

router.use('/api/moive', movieRoutes);

export default router;