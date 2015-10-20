"use strict";

// NPM require
var rek = require("rekuire");
var Sequelize = require("sequelize");

// Project require
var config = rek("shared/config/app/get-config");

module.exports = new Sequelize(config.database.database,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: "postgres"
    });
