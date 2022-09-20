const express = require("express")
const router = express.Router()
const {
    getProperties,
    getSortedProperties,
    pageProperties,
    getAscProperties,
    getDscProperties,
    getTypeProperties,
} = require("../controllers/propertyController")

router.route("/").get(getProperties)
router.route("/asc").get(getAscProperties)
router.route("/dsc").get(getDscProperties)
router.route("/properties").get(getTypeProperties)
router.route("/view").get(pageProperties)
router.route("/quicksort").get(getSortedProperties)

module.exports = router
