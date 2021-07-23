const express = require('express');

const route = express.Router();

require("../db/con");
const User = require("../model/userSchema");

route.get('/', (req, res) => {
    res.send("Hello World");
})

route.post('/', async(req, res) => {

    const { name, email, username, password, cpassword } = req.body;

    if (!name || !email || !username || !password || !cpassword) {
        res.json({ error: "Please fill all fields" })
    }
    try {

        const exist = await User.findOne({ email: email });
        if (exist) {
            res.status(422).json({ error: "User already exist" })
        } else {

            if (password == cpassword) {
                const user = new User({ name, email, username, password, cpassword });
                const result = await user.save();
                if (result) {
                    res.json({ message: "data Inserted" });
                }

            } else {
                res.json({ error: "Password does not match" })
            }

        }

    } catch (error) {
        console.log(error);
    }


})

route.post('/sign', async(req, res) => {

    const { username, password } = req.body;
    try {


        if (!username || !password) {
            res.json({ error: "Input fields are empty" })
        }

        const valid = await User.findOne({ username: username, password: password })

        if (valid) {
            res.json({ message: "logged in" });
        } else {
            res.status(422).json({ error: "Invalid cred" })
        }

    } catch (error) {
        console.log(error);
    }
})

module.exports = route;