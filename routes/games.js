const express = require('express')
const router = express.Router()
const AppError = require('../lib/app_error')
const axios = require('axios')

router.get('/:id', async (req, res, next) => {
    axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=ef0d07425fea44dc864de7b8d7534452`)
        .then(game => res.json(game.data))
        .catch(next)

})

module.exports = router