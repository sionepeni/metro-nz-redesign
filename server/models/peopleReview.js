const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema(
    {
        name: String,
        review: String,
    },
    { versionKey: false }
)

const Reviews = mongoose.model("people-reviews", reviewSchema)
module.exports = Reviews