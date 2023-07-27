const express = require("express")
const router = express.Router();
const sukunan = (req, res, next) => {
    if (req.body.password == "navin123") {
        next();
    }
    else {
        res.send("password incorrect");
    }
}
router.get("/Regist", sukunan,
    (req, res) => {
        res.send("Registered");
    })

module.exports = router;