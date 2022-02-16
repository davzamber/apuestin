const router = require ('express').Router ()
const index = require ('../../controllers/index/index')


router.get ('/', index.index)
router.post ('/signup', index.signup)
router.post ('/login', index.login)


module.exports.router = router
