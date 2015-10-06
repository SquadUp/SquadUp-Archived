"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var Car = sequelize.define("Car", {
        timestamps: false,

        userId: { type: Sequelize.INTEGER, allowNull: false },
        seats : { type: Sequelize.INTEGER, allowNull: false }
    });

    return Car;
};