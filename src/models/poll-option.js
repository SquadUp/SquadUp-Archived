"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var PollOption = sequelize.define("PollOption", {
        timestamps: false,

        pollId: { type: Sequelize.INTEGER, allowNull: false },
        text  : { type: Sequelize.STRING , allowNull: false }
    });

    return PollOption;
};