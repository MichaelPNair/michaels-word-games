const express = require('express')
const router = express.Router()
const AppError = require('../lib/app_error')
const axios = require('axios')

router.get('/:id', async (req, res, next) => {
    axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=${process.env.RAWG_KEY}`)
        .then(game => res.json(game.data))
        .catch(next)

})

module.exports = router