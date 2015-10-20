"use strict";

// Node Require
var fs = require("fs");

// NPM Require
var rek = require("rekuire");
var Sequelize = require("sequelize");

// Configure
var config = rek("shared/config/app/get-config");

var sequelize = new Sequelize(config.database.database,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: "postgres"
    });

// Project Require
// -- Models
var User = rek("src/models/user")(sequelize);
var ApiToken = rek("src/models/api-token")(sequelize);

var Squad = rek("src/models/squad")(sequelize);
var SquadMembership = rek("src/models/squad-membership")(sequelize);

var Car = rek("src/models/car")(sequelize);

var Event = rek("src/models/event")(sequelize);
var EventRSVP = rek("src/models/event-rsvp")(sequelize);

var Location = rek("src/models/location")(sequelize);
var Payment = rek("src/models/payment")(sequelize);

var Poll = rek("src/models/poll")(sequelize);
var PollOption = rek("src/models/poll-option")(sequelize);
var PoleVote = rek("src/models/pole-vote")(sequelize);

sequelize.sync();
