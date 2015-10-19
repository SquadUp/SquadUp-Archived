"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var PollOption = sequelize.define("PollOption", {
        poll_id: {type: Sequelize.INTEGER, allowNull: false},
        text: {type: Sequelize.STRING, allowNull: false}
    }, CommonDatabaseConfig("poll_options"));

    return PollOption;
};
