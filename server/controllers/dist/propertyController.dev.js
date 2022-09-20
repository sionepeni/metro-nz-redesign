"use strict";

var asyncHandler = require("express-async-handler");

var Quicksort = require("../functions/Quicksort");

var Properties = require("../models/propertyModel");

var getProperties = asyncHandler(function _callee(req, res) {
  var listings;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Properties.find({}, {
            _id: 0
          }));

        case 2:
          listings = _context.sent;
          res.status(200).json(listings);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
var getSortedProperties = asyncHandler(function _callee2(req, res) {
  var listings, sorted;
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
          sorted = Quicksort(listings);
          res.status(200).json(sorted);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
var pageProperties = asyncHandler(function _callee3(req, res) {
  var pageSize, page, total, allListings, listings;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          pageSize = 8;
          page = parseInt(req.query.page || "0");
          _context3.next = 4;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 4:
          total = _context3.sent;
          _context3.next = 7;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 7:
          allListings = _context3.sent;
          _context3.next = 10;
          return regeneratorRuntime.awrap(Properties.find({}).limit(pageSize).skip(pageSize * page));

        case 10:
          listings = _context3.sent;
          res.json({
            totalPages: Math.ceil(total / pageSize),
            listings: listings,
            allListings: allListings
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
});
var getAscProperties = asyncHandler(function _callee4(req, res) {
  var pageSize, page, total, allListings, listings;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          pageSize = 8;
          page = parseInt(req.query.page || "0");
          _context4.next = 4;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 4:
          total = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 7:
          allListings = _context4.sent;
          _context4.next = 10;
          return regeneratorRuntime.awrap(Properties.find({}).sort({
            cost: 1
          }).limit(pageSize).skip(pageSize * page));

        case 10:
          listings = _context4.sent;
          res.json({
            totalPages: Math.ceil(total / pageSize),
            listings: listings,
            allListings: allListings
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  });
});
var getDscProperties = asyncHandler(function _callee5(req, res) {
  var pageSize, page, total, allListings, listings;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          pageSize = 8;
          page = parseInt(req.query.page || "0");
          _context5.next = 4;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 4:
          total = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 7:
          allListings = _context5.sent;
          _context5.next = 10;
          return regeneratorRuntime.awrap(Properties.find({}).sort({
            cost: -1
          }).limit(pageSize).skip(pageSize * page));

        case 10:
          listings = _context5.sent;
          res.json({
            totalPages: Math.ceil(total / pageSize),
            listings: listings,
            allListings: allListings
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  });
});
var getTypeProperties = asyncHandler(function _callee6(req, res) {
  var pageSize, test, page, total, allListings, listings;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          pageSize = 8;
          test = req.query.type;
          page = parseInt(req.query.page || "0");
          _context6.next = 5;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 5:
          total = _context6.sent;
          _context6.next = 8;
          return regeneratorRuntime.awrap(Properties.countDocuments({}));

        case 8:
          allListings = _context6.sent;
          _context6.next = 11;
          return regeneratorRuntime.awrap(Properties.find({
            type: test
          }).limit(pageSize).skip(pageSize * page));

        case 11:
          listings = _context6.sent;
          res.json({
            totalPages: Math.ceil(total / pageSize),
            listings: listings,
            allListings: allListings
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = {
  getProperties: getProperties,
  getSortedProperties: getSortedProperties,
  pageProperties: pageProperties,
  getDscProperties: getDscProperties,
  getAscProperties: getAscProperties,
  getTypeProperties: getTypeProperties
};