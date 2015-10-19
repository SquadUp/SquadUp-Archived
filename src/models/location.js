"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var Location = sequelize.define("Location", {
        name: {type: Sequelize.STRING, allowNull: false},
        lat: {type: Sequelize.DOUBLE, allowNull: false},
        long: {type: Sequelize.DOUBLE, allowNull: false}
    }, CommonDatabaseConfig("locations"));

    return Location;
};
