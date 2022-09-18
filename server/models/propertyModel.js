const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// List all attributes needed for front-end form.

const propertySchema = new Schema(
    {
        header: String,
        address: String,
        location: String,
        district: String,
        suburb: String,
        type: String,
        bedroom: Number,
        bathroom: Number,
        parking: Number,
        pet: String,
        cost: Number,
        furnish: String,
        pictures: {
            1: String,
            2: String,
            3: String,
            4: String,
            5: String,
            6: String,
            7: String,
            8: String,
            9: String,
            10: String,
            11: String,
            12: String,
            13: String,
            14: String,
            15: String,
        },
    },
    // disabling __v key from db
    { versionKey: false }
)

const Properties = mongoose.model("houses", propertySchema)
module.exports = Properties
