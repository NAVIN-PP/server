const express = require("express")
const router = express.Router();

router.post("/Login", (req, res) => {
    res.send("LOGIN");
})
router.post("/", (req, res) => {
    res.send("bingo");
})
module.exports = router;