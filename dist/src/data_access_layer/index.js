"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.purgeReading = exports.getReading = exports.postReading = void 0;
var database = {};
/**
 * Store a reading in the database using the given key
 */
var postReading = function (key, reading) {
    database[key] = reading;
    return reading;
};
exports.postReading = postReading;
/**
 * Retrieve a reading from the database using the given key
 */
var getReading = function (key) {
    return database[key];
};
exports.getReading = getReading;
var purgeReading = function () {
    database = {};
};
exports.purgeReading = purgeReading;
var getAll = function () {
    return database;
};
exports.getAll = getAll;
exports.default = {
    postReading: exports.postReading,
    getReading: exports.getReading,
    purgeReading: exports.purgeReading,
    getAll: exports.getAll
};
