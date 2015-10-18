"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var Location = sequelize.define("Location", {
        timestamps: false,

        name: { type: Sequelize.STRING, allowNull: false },
        lat : { type: Sequelize.DOUBLE, allowNull: false },
        long: { type: Sequelize.DOUBLE, allowNull: false }
    });

    return Location;
};