"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var Payment = sequelize.define("Payment", {
        timestamps: false,

        toUserId  : { type: Sequelize.INTEGER, allowNull: false },
        fromUserId: { type: Sequelize.INTEGER, allowNull: false },
        ammount   : { type: Sequelize.INTEGER, allowNull: false }
    });

    return Payment;
};