"use strict";

module.exports = function(tableName) {
    return {
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        tableName: tableName
    }
};
