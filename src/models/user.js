"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var User = sequelize.define("User", {
        email: {type: Sequelize.STRING, allowNull: false, unique: true},
        first_name: {type: Sequelize.STRING, allowNull: false},
        last_name: {type: Sequelize.STRING, allowNull: false},
        avatar_uri: {type: Sequelize.STRING, allowNull: false},
        location_id: {type: Sequelize.INTEGER, allowNull: false}
    }, CommonDatabaseConfig("users"));

    return User;
};
