"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var Poll = sequelize.define("Poll", {
        timestamp: false,

        squadId : { type: Sequelize.INTEGER, allowNull: false },
        title   : { type: Sequelize.STRING , allowNull: false },
        question: { type: Sequelize.STRING , allowNull: false }
    });

    return Poll;
};