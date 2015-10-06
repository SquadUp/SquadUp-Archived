"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var PoleVote = sequelize.define("PoleVote", {
        timestamps: false,

        poleId: { type: Sequelize.INTEGER, allowNull: false },
        userIdL { type: Sequelize.INTEGER, allowNull: false }
    });

    return PoleVote;
};