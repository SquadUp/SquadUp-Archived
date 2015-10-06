"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var PoleVote = sequelize.define("PoleVote", {
        timestamps: false,

        poleId: { type: Sequelize.INTEGER, allowNull: false },
        userId: { type: Sequelize.INTEGER, allowNull: false }
    });

    return PoleVote;
};