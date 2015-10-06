"use strict";

var Sequelize = require("sequelize")

module.exports = function(sequelize) {
    var Event = sequelize.define("Event", {
        timestamps: false,

        squadId   : { type: Sequelize.INTEGER, allowNull: false },
        name      : { type: Sequelize.STRING , allowNull: false },
        locationId: { type: Sequelize.INTEGER, allowNull: false },
        dateTime  : { type: Sequelize.DATE   , allowNull: false }
    });

    return Event;
};