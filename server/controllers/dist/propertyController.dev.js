"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var asyncHandler = require("express-async-handler");

var Quicksort = require("../functions/Quicksort");

var Properties = require("../models/propertyModel");

var getProperties = asyncHandler(function _callee(req, res) {
  var pageSize, page, allListings, total, query, reqQuery, removeFields, queryString, sortByArray, sortByString, listings, sorted;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pageSize = 8;
          page = parseInt(req.query.page || "0");
          _context.next = 4;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 4:
          allListings = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 7:
          total = _context.sent;
          reqQuery = _objectSpread({}, req.query);
          removeFields = ["sort", "limit"];
          removeFields.forEach(function (val) {
            return delete reqQuery[val];
          });
          queryString = JSON.stringify(reqQuery);
          queryString = queryString.replace(/\b(gt|gte|lt|lte|in|all|text|search|eq)\b/g, function (match) {
            return "$".concat(match);
          });
          query = Properties.find(JSON.parse(queryString), {
            _id: 0
          });

          if (req.query.sort) {
            sortByArray = req.query.sort.split(",");
            sortByString = sortByArray.join(" ");
            query = query.sort(sortByString);
          } else {
            query = query.sort("-createdAt");
          }

          _context.next = 17;
          return regeneratorRuntime.awrap(query.limit(pageSize).skip(pageSize * page));

        case 17:
          listings = _context.sent;
          sorted = Quicksort(listings);
          res.status(200).json({
            success: true,
            data: sorted,
            totalPages: Math.ceil(total / pageSize),
            listings: listings,
            allListings: listings.length
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  });
});
var getSortedProperties = asyncHandler(function _callee2(req, res) {
  var listings;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Properties.find({}, {
            _id: 0
          }));

        case 2:
          listings = _context2.sent;
          res.status(200).json(sorted);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = {
  getProperties: getProperties,
  getSortedProperties: getSortedProperties
};