require('dotenv').config()
const joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {
    User
} = require('../models/user');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');


router.post('/', async (req, res) => {
    // First Validate The HTTP Request
    const {
        error
    } = validate(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    //  Now find the user by their email address
    let user = await User.findOne({
        email: req.body.email
    });
    if (!user) {
        return res.status(400).json('Incorrect email or password.');
    }

    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).json('Incorrect email or password.');
    }

    const token = jwt.sign({
        _id: user._id
    }, process.env.PRIVATE_KEY);
    res.send(token);
});

function validate(req) {
    const schema = joi.object().keys({
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(255).required()
    })
    const validatedUser = schema.validate(req);
    return validatedUser;
}

module.exports = router;