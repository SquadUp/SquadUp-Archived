"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var ApiToken = sequelize.define("ApiToken", {
        timestamps: false,

        userId   : { type: Sequelize.INTEGER, allowNull: false },
        token    : { type: Sequelize.STRING , allowNull: false, unique: true },
        expiresOn: { type: Sequelize.DATE   , allowNull: false }
    });

    return ApiToken;
};