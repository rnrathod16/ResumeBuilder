const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' })

require('./db/con.js')
app.use(express.json());


app.use(require('./routes/route'))


app.listen(5000, () => {
    console.log("Success");
})