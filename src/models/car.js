"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var Car = sequelize.define("Car", {
        user_id: {type: Sequelize.INTEGER, allowNull: false},
        seats: {type: Sequelize.INTEGER, allowNull: false}
    }, CommonDatabaseConfig("cars"));

    return Car;
};
