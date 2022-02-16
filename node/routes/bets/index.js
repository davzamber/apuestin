const router = require("express").Router();

const bets = require("../../controllers/bets/index");

router.get("/", bets.index);

module.exports.router = router;
