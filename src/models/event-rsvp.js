"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var EventRSVP = sequelize.define("EventRSVP", {
        event_id: {type: Sequelize.INTEGER, allowNull: false},
        user_id: {type: Sequelize.INTEGER, allowNull: false},
        attending: {type: Sequelize.BOOLEAN, allowNull: false},
        car_id: {type: Sequelize.INTEGER, allowNull: true}
    }, CommonDatabaseConfig("event_rsvps"));

    return EventRSVP;
};
