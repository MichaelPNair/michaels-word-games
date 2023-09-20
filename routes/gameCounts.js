const express = require('express')
const router = express.Router()
const User = require('../models/user')
const AppError = require('../lib/app_error')


router.get('/', async (req, res, next) => {


    try{

        const user = await User.findOne({username: req.user.username})

        if (!user) {
            throw new AppError(400, "invalid email or password")
        }
        console.log(user)
        let clone = user.toObject()
        delete clone.password_digest
        res.json(clone)
    } catch(err){
        next(err)
    }

})

router.put('/mangaguess', async (req, res, next) => {

    const {username} = req.body

    try{

        const user = await User.findOneAndUpdate({username: username}, {$inc : {guessWins : 1}}, {new: true })

        if (!user) {
            throw new AppError(400, "invalid email or password")
        }
        console.log(user)
        let clone = user.toObject()
        delete clone.password_digest
        res.json(clone)
    } catch(err){
        next(err)
    }

})

router.put('/mangawordle', async (req, res, next) => {

    const {username} = req.body

    try{

        const user = await User.findOneAndUpdate({username: username}, {$inc : {wordleWins : 1}}, {new: true })

        if (!user) {
            throw new AppError(400, "invalid email or password")
        }
        console.log(user)
        let clone = user.toObject()
        delete clone.password_digest
        res.json(clone)
    } catch(err){
        next(err)
    }

})

module.exports = router