const mongoose = require('mongoose');
const dotenv = require('dotenv');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected to the Database")
}).catch((err) => {
    console.log("Error Connecting to Database");
})
