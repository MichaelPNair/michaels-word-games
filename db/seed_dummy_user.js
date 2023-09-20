require('dotenv').config()

require('./index')

const User = require('../models/user')

User.create({username:'michael', password_digest:'pudding'})
    .then(res => console.log(res))
    .catch(err => console.log(err))