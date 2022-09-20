"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/propertyController"),
    getProperties = _require.getProperties,
    getSortedProperties = _require.getSortedProperties,
    pageProperties = _require.pageProperties,
    getAscProperties = _require.getAscProperties,
    getDscProperties = _require.getDscProperties,
    getTypeProperties = _require.getTypeProperties;

router.route("/").get(getProperties);
router.route("/asc").get(getAscProperties);
router.route("/dsc").get(getDscProperties);
router.route("/properties").get(getTypeProperties);
router.route("/view").get(pageProperties);
router.route("/quicksort").get(getSortedProperties);
module.exports = router;