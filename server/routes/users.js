require('dotenv').config()
const bcrypt = require('bcrypt');
const {
    User,
    validate
} = require('../models/user');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', async (req, res) => {
    // First Validate The Request
    const {
        error
    } = validate(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    // Check if this user already exisits
    let user = await User.findOne({
        email: req.body.email
    });
    let userName = await User.findOne({
        name: req.body.name
    });
    if (user || userName) {
        return res.status(400).json('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User(_.pick(req.body, ['name', 'email', 'password', 'birthday']));

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        const token = jwt.sign({
            _id: user._id
        }, process.env.PRIVATE_KEY);
        res.header('x-auth-token', token).json(_.pick(user, ['_id', 'name', 'email']));
    }
});

router.get('/:id', async (req, res) => {
    let user = await User.findOne({
        name: req.params.id
    })
    res.status(200).json(_.pick(user, ['name', 'email']));
})

module.exports = router;