"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var ApiToken = sequelize.define("ApiToken", {
        user_id: {type: Sequelize.INTEGER, allowNull: false},
        token: {type: Sequelize.STRING, allowNull: false, unique: true},
        expires_on: {type: Sequelize.DATE, allowNull: false}
    }, CommonDatabaseConfig("api_tokens"));

    return ApiToken;
};
