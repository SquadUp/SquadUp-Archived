"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var EventRSVP = sequelize.define("EventRSVP", {
        timestamps: false,

        eventId  : { type: Sequelize.INTEGER, allowNull: false },
        userId   : { type: Sequelize.INTEGER, allowNull: false },
        attending: { type: Sequelize.BOOLEAN, allowNull: false },
        carId    : { type: Sequelize.INTEGER, allowNull: true }
    });

    return EventRSVP;
};