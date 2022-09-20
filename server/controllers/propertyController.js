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

const pageProperties = asyncHandler(async (req, res) => {
    const pageSize = 8
    const page = parseInt(req.query.page || "0")
    const total = await Properties.countDocuments({})
    const allListings = await Properties.countDocuments({})
    const listings = await Properties.find({})
        .limit(pageSize)
        .skip(pageSize * page)
    res.json({
        totalPages: Math.ceil(total / pageSize),
        listings,
        allListings,
    })
})

const getAscProperties = asyncHandler(async (req, res) => {
    const pageSize = 8
    const page = parseInt(req.query.page || "0")
    const total = await Properties.countDocuments({})
    const allListings = await Properties.countDocuments({})
    const listings = await Properties.find({})
        .sort({ cost: 1 })
        .limit(pageSize)
        .skip(pageSize * page)
    res.json({
        totalPages: Math.ceil(total / pageSize),
        listings,
        allListings,
    })
})

const getDscProperties = asyncHandler(async (req, res) => {
    const pageSize = 8
    const page = parseInt(req.query.page || "0")
    const total = await Properties.countDocuments({})
    const allListings = await Properties.countDocuments({})
    const listings = await Properties.find({})
        .sort({ cost: -1 })
        .limit(pageSize)
        .skip(pageSize * page)
    res.json({
        totalPages: Math.ceil(total / pageSize),
        listings,
        allListings,
    })
})

const getTypeProperties = asyncHandler(async (req, res) => {
    const pageSize = 8
    const test = req.query.type
    const page = parseInt(req.query.page || "0")
    const total = await Properties.countDocuments({})
    const allListings = await Properties.countDocuments({})
    const listings = await Properties.find({ type: test })
        .limit(pageSize)
        .skip(pageSize * page)
    res.json({
        totalPages: Math.ceil(total / pageSize),
        listings,
        allListings,
    })
})

module.exports = {
    getProperties,
    getSortedProperties,
    pageProperties,
    getDscProperties,
    getAscProperties,
    getTypeProperties,
}
