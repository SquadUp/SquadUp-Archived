"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var ApiToken = sequelize.define("ApiToken", {
        timestamps: false,

        userId   : { type: sequelize.INTEGER, allowNull: false },
        token    : { type: sequelize.STRING , allowNull: false, unique: true },
        expiresOn: { type: sequelize.DATE   , allowNull: false }
    });
};