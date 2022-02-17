const router = require ('express').Router ()
const index = require ('../../controllers/index/index')
const auth = require ('../../controllers/index/auth')


router.get ('/', index.index)
router.get ('/logout', auth.logout)
router.post ('/signup', auth.signup)
router.post ('/login', auth.login)



module.exports.router = router
