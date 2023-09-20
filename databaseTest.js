require('dotenv').config()
require('./db/index')
const User = require('./models/user')

// User.find().then(users => console.log(users))

User.deleteMany().then(users => console.log(users))

// User.findOne({username: 'michael'}).then(users => console.log(users))

// User.findOneAndUpdate({username: 'michael'}, {$inc : {guessWins : 1}}, {new: true }).then(users => console.log(users))

// User.findOneAndUpdate({username: 'michael'}, {$inc : {wordleWins : 1}}, {new: true }).then(users => console.log(users))