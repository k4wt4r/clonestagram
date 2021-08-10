const joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}));

function validateUser(user) {
    const schema = joi.object().keys({
        name: joi.string().min(5).max(20).required(),
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(16).required()
    })
    const validatedUser = schema.validate(user);
    return validatedUser;
}

exports.User = User;
exports.validate = validateUser;