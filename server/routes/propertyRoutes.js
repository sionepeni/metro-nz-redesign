const express = require("express")
const router = express.Router()
const {
    getProperties,
    getSortedProperties,
} = require("../controllers/propertyController")

router.route("/").get(getProperties)
router.route("/quicksort").get(getSortedProperties)

module.exports = router
