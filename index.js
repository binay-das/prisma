const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/index');

app.get('/', (req, res) => {
    res.send("Index route");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})