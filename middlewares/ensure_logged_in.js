
function ensureLoggedIn(req, res, next) {

    if (!req.user) return res.status(401).json({message: 'unauthorized'})

    next()
}

module.exports = ensureLoggedIn