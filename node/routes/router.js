const router = require('express').Router ()

router.use ('/', require('./index/').router)
router.use ('/bets', require('./bets/').router)

module.exports.router = router
