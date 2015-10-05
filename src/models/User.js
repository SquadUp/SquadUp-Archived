"use strict";

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
    var User = sequelize.define("User", {
        timestamps: false,

        email     : { type: Sequelize.STRING , allowNull: false, unique: true }
        firstName : { type: Sequelize.STRING , allowNull: false },
        lastName  : { type: Sequelize.STRING , allowNull: false },
        avatarUri : { type: Sequelize.STRING , allowNull: false },
        locationId: { type: Sequelize.INTEGER, allowNull: false }
    });

    return User;
};