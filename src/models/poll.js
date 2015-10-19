"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var Poll = sequelize.define("Poll", {
        squad_id: {type: Sequelize.INTEGER, allowNull: false},
        title: {type: Sequelize.STRING, allowNull: false},
        question: {type: Sequelize.STRING, allowNull: false}
    }, CommonDatabaseConfig("polls"));

    return Poll;
};
