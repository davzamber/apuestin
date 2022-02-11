const router = require('express').Router ()

router.use ('/', require('./index/').router)

module.exports.router = router
