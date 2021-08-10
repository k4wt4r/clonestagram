const config = require('config')
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();
const passwordDb = config.get('PasswordDatabase');
const connectionString = `mongodb+srv://dolanee:${passwordDb}@cluster0.fs50k.mongodb.net/clonestagram?retryWrites=true&w=majority`;

if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))