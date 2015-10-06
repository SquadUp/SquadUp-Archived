"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var SquadMembership = sequelize.define("SquadMembership", {
        timestamps: false,

        squadId   : { type: Sequelize.INTEGER, allowNull: false },
        userId    : { type: Sequelize.INTEGER, allowNull: false },
        permission: { type: Sequelize.ENUM(), allowNull: false }
    });
};