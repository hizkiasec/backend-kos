const express = require("express")
const router = express.Router()
const roomController = require("../controllers/roomControllers")

router.post("/rooms",roomController.createRoom)
router.get("/rooms",roomController.getRooms)
router.get("/rooms/available",roomController.getAvailableRooms)

module.exports = router