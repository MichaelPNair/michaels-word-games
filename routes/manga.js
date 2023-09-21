const express = require('express')
const router = express.Router()
const AppError = require('../lib/app_error')
const axios = require('axios')


router.put('/search', async (req, res, next) => {
    const {searchText} = req.body

    axios.get(`https://api.mangadex.org/manga?limit=9&title=${searchText}&includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&contentRating%5B%5D=suggestive&contentRating%5B%5D=erotica&order%5Brelevance%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
    .then(manga => res.json(manga.data))
    .catch(next)
    
})

router.get('/:id', async (req, res, next) => {
    axios.get(`https://api.mangadex.org/manga/${req.params.id}?includes%5B%5D=manga&includes%5B%5D=cover_art&includes%5B%5D=author&includes%5B%5D=artist`)
        .then(manga => res.json(manga.data))
        .catch(next)

})

module.exports = router