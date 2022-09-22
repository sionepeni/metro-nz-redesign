const express = require("express")
const router = express.Router()
const _require = require('../controllers/profileReviews'),
    getReviews = _require.getReviews

router.route('/').get(getReviews)

module.exports = router

