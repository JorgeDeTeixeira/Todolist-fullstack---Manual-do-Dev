const router = require("express").Router();

router.get("/tasks", (req, res) => {
    res.status(200).send("Olá mundo!");
});


module.exports = router;
