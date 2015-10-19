"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var PoleVote = sequelize.define("PoleVote", {
        pole_id: {type: Sequelize.INTEGER, allowNull: false},
        user_id: {type: Sequelize.INTEGER, allowNull: false}
    }, CommonDatabaseConfig("pole_votes"));

    return PoleVote;
};
