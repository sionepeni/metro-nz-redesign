const asyncHandler = require("express-async-handler")
const Quicksort = require("../functions/Quicksort")

const Properties = require("../models/propertyModel")

const getProperties = asyncHandler(async (req, res) => {
    const pageSize = 8
    const page = parseInt(req.query.page || "0")
    const allListings = await Properties.countDocuments({})
    const total = await Properties.countDocuments({})

    let query
    const reqQuery = { ...req.query }
    const removeFields = ["sort", "limit"]

    removeFields.forEach((val) => delete reqQuery[val])

    let queryString = JSON.stringify(reqQuery)
    queryString = queryString.replace(
        /\b(gt|gte|lt|lte|in)\b/g,
        (match) => `$${match}`
    )

    query = Properties.find(JSON.parse(queryString))

    if (req.query.sort) {
        const sortByArray = req.query.sort.split(",")
        const sortByString = sortByArray.join(" ")
        query = query.sort(sortByString)
    } else {
        query = query.sort("-createdAt")
    }

    const listings = await query.limit(pageSize).skip(pageSize * page)

    res.status(200).json({
        success: true,
        data: listings,
        totalPages: Math.ceil(total / pageSize),
        listings,
        allListings: allListings,
    })
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
