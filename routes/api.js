const express = require('express');
const router = express.Router()

router.get("/server", (req, res) => {
    const data = {
        text: "Learn Mern APP",
        author: "Qudusayo"
    }
    res.json(data)
})

module.exports = router