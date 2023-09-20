const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AppError = require('../lib/app_error')

router.post('/', async (req, res, next) => {

    const {username, password} = req.body

    try{

        const user = await User.findOne({username})

        if (!user) {
            throw new AppError(400, "invalid email or password")
        }
    
        const match = await bcrypt.compare(password, user.password_digest)
    
        if(!match) {
            throw new AppError(400, "invalid email or password")
        }
    
        const token = createJsonWebToken({id: user._id, username: user.username})
        res.json(token)
    } catch(err){
        next(err)
    }

})

router.post('/new', (req, res, next) => {

    const {username, password} = req.body

    User.create({username: username, password_digest: password})
    .then(user => {

        console.log(user)
        let clone = user.toObject()
        delete clone.password_digest
        res.json(clone)
    })
    .catch(err => next(err))

})

function createJsonWebToken(data){
    return jwt.sign(data, process.env.SECRET, {expiresIn: '24h'})
}

module.exports = router