require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on('connected',() => {
    console.log(
        `connected to mongoDB ${db.name} at ${db.host}:${db.port}`
    )
})