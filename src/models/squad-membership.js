"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");
var PermissionLevel = rek("src/enums/permission-level");

module.exports = function (sequelize) {
    var SquadMembership = sequelize.define("SquadMembership", {
        squad_id: {type: Sequelize.INTEGER, allowNull: false},
        user_id: {type: Sequelize.INTEGER, allowNull: false},
        permission: {
            type: Sequelize.ENUM(
                PermissionLevel.ADMIN,
                PermissionLevel.USER),
            allowNull: false
        }
    }, CommonDatabaseConfig("squad_memberships"));
};
