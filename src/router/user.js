const express = require('express');
const routing = new express.Router();
const reguser = require('../models/usermodel');
routing.post("/registration", async function (req, res) {
    console.log('body is coming', req.body);
    const dataregister = req.body;
    try {
        const registeruser = {
            name: req.body.name,
            email: req.body.email,
            mobileno: req.body.mobileno,
            password: req.body.password
        }
        const reapeatuser = await reguser.find({ "email": email });
        console.log("db response is comong email is already exisiting or not", reapeatuser);
        if (reapeatuser.length == 0) {
            const registeruser = new reguser(registeruser);
            const registeruseradd = await add.save();

        } else {
            return res.send("email is already existest", email);
        }


    } catch (error) {
        return res.status(501).send(`some error in signup${error}`);
    }

})
routing.post("/login", async function (req, res) {
    console.log('body is coming', req.body);
    const dataregister = req.body;
    try {
        const registeruser = {
            name: req.body.name,
            email: req.body.email,
            mobileno: req.body.mobileno,
            password: req.body.password
        }
        const reapeatuser = await reguser.find({ "email": email });
        console.log("db response is comong email is already exisiting or not", reapeatuser);
        if (reapeatuser.length == 0) {
            const registeruser = new reguser(registeruser);
            const registeruseradd = await add.save();

        } else {
            return res.send("email is already existest", email);
        }


    } catch (error) {
        return res.status(501).send(`some error in signup${error}`);
    }

})