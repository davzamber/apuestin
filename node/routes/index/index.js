const router = require ('express').Router ()
const index = require ('../../controllers/index/index')


router.get ('/', index.index)
router.get ('/signup', index.signup)


module.exports.router = router
