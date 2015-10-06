"use strict";

// Node Require
var fs = require("fs");

// NPM Require
var rek = require("rekuire");
var Sequelize = require("sequelize");

// Configure
if(!fs.existsSync("src/config.js")) {
    throw "Can not start without \"src/config.js\" file";
}

var config = rek("src/config");

var sequelize = new Sequelize(config.database.database,
                              config.database.user,
                              config.database.password,
                              {
                                    host: config.database.host,
                                    dialect: "postgres"
                              });

// Project Require
// -- Models
var User = rek("src/models/User")(sequelize);
var ApiToken = rek("src/models/ApiToken")(sequelize);

var Squad = rek("src/models/Squad")(sequelize);
var SquadMembership = rek("src/models/SquadMembership")(sequelize);

var Car = rek("src/models/Car")(sequelize);

var Event = rek("src/models/Event")(sequelize);
var EventRSVP = rek("src/models/EventRSVP")(sequelize);

var Location = rek("src/models/Location")(sequelize);
var Payment = rek("src/models/Payment")(sequelize);

var Poll = rek("src/models/Poll")(sequelize);
var PollOption = rek("src/models/PollOption")(sequelize);
var PoleVote = rek("src/models/PoleVote")(sequelize);
