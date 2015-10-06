"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var PermissionLevel = rek("src/Enum/PermissionLevel");

module.exports = function(sequelize) {
    var SquadMembership = sequelize.define("SquadMembership", {
        timestamps: false,

        squadId   : { type: Sequelize.INTEGER, allowNull: false },
        userId    : { type: Sequelize.INTEGER, allowNull: false },
        permission: { type: Sequelize.ENUM(
                                            PermissionLevel.ADMIN,
                                            PermissionLevel.USER),
                                               allowNull: false }
    });
};