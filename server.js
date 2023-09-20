require('dotenv').config()

const express = require('express')
const app = express()
const usersRouter = require('./routes/users')
const gameCountsRouter = require('./routes/gameCounts')
const gamesRouter = require('./routes/games')
const mangaRouter = require('./routes/manga')
const errorHandler = require('./middlewares/error_handler')
const checkToken = require('./middlewares/check_token')
const ensureLoggedIn = require('./middlewares/ensure_logged_in')

require('./db')

const port = process.env.PORT || 8080

app.use(express.json())
// app.use(checkToken)

// app.use('/api/gameCount', ensureLoggedIn, gameCountsRouter)
// app.use('/api/login', usersRouter)

app.use('/api/manga', mangaRouter)
app.use('/api/games', gamesRouter)



app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})