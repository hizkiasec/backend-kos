const express = require("express")
const router = express.Router()
const memberController = require("../controllers/memberControllers")

router.post("/members",memberController.createMember)
router.get("/members",memberController.getMembers)

module.exports = router