const express = require("express")
const router = express.Router()
const reviewController = require("../controllers/reviewControllers")

router.post("/reviews",reviewController.createReview)

router.get("/reviews/:kos_id",reviewController.getReviews)

router.put("/reviews/:id",reviewController.replyReview)

module.exports = router