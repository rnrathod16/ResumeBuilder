const express = require('express');
const dotenv = require('dotenv');
const app = express();
require('./db/connection.js');

dotenv.config({ path: './config.env' })
app.use(express.json());
app.use(require('./routes/route'))

app.listen(process.env.PORT || 5000, () => {
    console.log("Success");
})