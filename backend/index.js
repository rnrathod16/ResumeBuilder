const express = require('express');
const dotenv = require('dotenv');
const app = express();


dotenv.config({ path: './config.env' })

require('./db/con.js')
app.use(express.json());


app.use(require('./routes/route'))
    // const jwt = require('jsonwebtoken');

app.listen(5000, () => {
    console.log("Success");
})