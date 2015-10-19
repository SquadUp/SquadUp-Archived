"use strict";

// NPM Require
var Sequelize = require("sequelize");
var rek = require("rekuire");

// Project Require
var CommonDatabaseConfig = rek("src/models/common-database-config");

module.exports = function (sequelize) {
    var Payment = sequelize.define("Payment", {
        to_user_id: {type: Sequelize.INTEGER, allowNull: false},
        from_user_id: {type: Sequelize.INTEGER, allowNull: false},
        amount: {type: Sequelize.INTEGER, allowNull: false}
    }, CommonDatabaseConfig("payments"));

    return Payment;
};
