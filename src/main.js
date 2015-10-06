"use strict";

// Node Require
var fs = require("fs");

// NPM Require
var rek = require("rekuire");
var Sequelize = require("sequelize");

// -- Load App Config
if(!fs.existsSync("src/config.js")) {
    throw "Can not start without \"src/config.js\" file";
}

var config = rek("src/config");

// -- Configure
var sequelize = new Sequelize(config.database.database,
                              config.database.user,
                              config.database.password,
                              {
                                host: config.database.host,
                                dialect: "postgres"
                              });

// Project Require
// -- Models
var ApiToken = rek("src/models/ApiToken")(sequelize);