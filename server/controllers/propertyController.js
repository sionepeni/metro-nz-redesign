const asyncHandler = require("express-async-handler")
const Quicksort = require("../functions/Quicksort")

const Properties = require("../models/propertyModel")

const getProperties = asyncHandler(async (req, res) => {
    const listings = await Properties.find({}, { _id: 0 })
    res.status(200).json(listings)
})

const getSortedProperties = asyncHandler(async (req, res) => {
    const listings = await Properties.find({}, { _id: 0 })
    let sorted = Quicksort(listings)
    res.status(200).json(sorted)
})

module.exports = {
    getProperties,
    getSortedProperties,
}
