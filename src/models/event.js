"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var Event = sequelize.define("Event", {
        squad_id: {type: Sequelize.INTEGER, allowNull: false},
        name: {type: Sequelize.STRING, allowNull: false},
        location_id: {type: Sequelize.INTEGER, allowNull: false},
        date_time: {type: Sequelize.DATE, allowNull: false}
    }, CommonDatabaseConfig("events"));

    return Event;
};
