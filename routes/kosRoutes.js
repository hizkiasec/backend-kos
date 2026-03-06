const express = require("express")
const router = express.Router()

const kosController = require("../controllers/kosController")

router.post("/kos",kosController.createKos)
router.get("/kos",kosController.getKos)

module.exports = router