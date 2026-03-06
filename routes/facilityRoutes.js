const express = require("express")
const router = express.Router()
const facilityController = require("../controllers/facilityControllers")

router.post("/facilities",facilityController.createFacility)

router.get("/facilities/:kos_id",facilityController.getFacilities)

module.exports = router