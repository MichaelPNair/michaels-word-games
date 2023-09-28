const express = require('express')
const router = express.Router()
const AppError = require('../lib/app_error')
const axios = require('axios')

router.get('/:id', async (req, res, next) => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&i=${req.params.id}`)
        .then(movie => res.json(movie.data))
        .catch(next)

})

module.exports = router