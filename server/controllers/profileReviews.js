const asyncHandler = require("express-async-handler")

const Reviews = require("../models/peopleReview")

const getReviews = asyncHandler(async(req, res) => {
    const reviews = await Reviews.find({}, {_id: 0})
    res.status(200).json(reviews)
})

module.exports = {
    getReviews
}