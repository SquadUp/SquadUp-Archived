"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var Squad = sequelize.define("Squad", {
        timestamps: false,

        name       : { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: true },
        avatarUri  : { type: Sequelize.STRING, allowNull: false }
    });

    return Squad;
};