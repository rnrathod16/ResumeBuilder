const express = require('express');

const route = express.Router();


require("../db/connection");
const User = require("../model/userSchema");

// route.get('/', (req, res) => {
//     res.send("Hello World");
// })



route.post('/', async(req, res) => {

    const { name, email, username, password, cpassword } = req.body;

    if (!name || !email || !username || !password || !cpassword) {
        res.json({ error: "Please fill all fields" })
    }
    try {

        const exist = await User.findOne({ username: username });
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
            const u = await User.findOne({ username: username });
            // console.log(u._id);
            res.json({ message: u._id });


        } else {
            res.status(422).json({ error: "Invalid cred" })
        }

    } catch (error) {
        console.log(error);
    }
})
let x;

route.post('/about', async(req, res) => {

    const { dfname, dlname, dmail, dmobile, id } = req.body;
    try {


        if (!dfname || !dlname || !dmail || !dmobile) {
            res.json({ error: "Input fields are empty" })
        }

        x = id;

        const val = await User.findOne({ _id: id })

        if (val) {


            const n = await User.updateOne({ _id: id }, { $set: { dfname: dfname, dlname: dlname, dmail: dmail, dmobile: dmobile } });



        } else {
            res.status(422).json({ error: "Invalid cred" })
        }

    } catch (error) {
        console.log(error);
    }
})

route.post('/education', async(req, res) => {

    const { duniname, dfromuni, dtouni, dcgpa, dcity, id } = req.body;
    try {


        if (!duniname || !dcgpa || !dcity) {
            res.json({ error: "Input fields are empty" })
        }

        const val = await User.findOne({ _id: id })

        if (val) {


            const n = await User.updateOne({ _id: id }, { $set: { duniname: duniname, dfromuni: dfromuni, dtouni: dtouni, dcgpa: dcgpa, dcity: dcity } });



        } else {
            res.status(422).json({ error: "Invalid cred" })
        }

    } catch (error) {
        console.log(error);
    }
})

route.post('/project', async(req, res) => {

    const { dproject, dprofrom, dproto, dmentor, ddesc, id } = req.body;
    try {


        if (!dproject || !dmentor || !ddesc) {
            res.json({ error: "Input fields are empty" })
        }

        const val = await User.findOne({ _id: id })

        if (val) {


            const n = await User.updateOne({ _id: id }, { $set: { dproject: dproject, dprofrom: dprofrom, dproto: dproto, dmentor: dmentor, ddesc: ddesc } });



        } else {
            res.status(422).json({ error: "Invalid cred" })
        }

    } catch (error) {
        console.log(error);
    }
})




route.get("/portfolio/:id", async(req, res) => {

    // const id = req.params.id;

    try {
        const data = await User.findById(req.params.id);
        res.send(data);

    } catch (err) {
        console.log(err);
        res.send(err);
    }

    // console.log(id);
    // console.log(data);


})




//     try {

//         const val = await User.findOne({ _id: id })
//         console.log(val);

//         if (val) {


//             // const n = await User.updateOne({ _id: id }, { $set: { dproject: dproject, dmentor: dmentor, ddesc: ddesc } });



//         } else {
//             res.status(422).json({ error: "Invalid cred" })
//         }

//     } catch (error) {
//         console.log(error);
//     }
// })


module.exports = route;