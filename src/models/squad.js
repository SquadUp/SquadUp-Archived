"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var Squad = sequelize.define("Squad", {
        name: {type: Sequelize.STRING, allowNull: false},
        description: {type: Sequelize.STRING, allowNull: true},
        avatar_uri: {type: Sequelize.STRING, allowNull: false}
    }, CommonDatabaseConfig("squads"));

    return Squad;
};
