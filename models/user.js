const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const AppError = require('../lib/app_error')

const Schema = mongoose.Schema
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        password_digest: {
            type: String,
            required: true
        },
        wordleWins: {
            type: Number,
            default: 0
        },
        guessWins: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', async function(next){

    if (!this.isModified('password_digest')){
        return next()
    }

    this.password_digest = await bcrypt.hash(this.password_digest, 10)


    next()

})

module.exports = mongoose.model('User', userSchema)