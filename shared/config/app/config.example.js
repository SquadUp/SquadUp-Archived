"use strict";

/**
 * INSTRUCTIONS:
 *      Duplicate this file and name the copy `config.js`. Then change any
 *      values in the config variable
 *
 * WARNING:
 *      DO not modify this file, it is here as a template for future developers,
 *      anything put in this file will be committed to public source control
 */

// NPM Require
var url = require("url");
var extend = require("extend");

// Env
var environment = process.env.NODE_ENV;

if(process.env.DATABASE_URL) {
    var postgresUrl = url.parse(process.env.DATABASE_URL);
}

var config = {
    // Common configuration between all environments
    base: {

    },

    // Development configuration
    development: {
        database: {
            host: "",
            user: "",
            password: "",
            database: ""
        }
    },

    // Production configuration
    production: {
        database: {
            host: postgresUrl.host,
            user: postgresUrl.auth.split(":")[0],
            password: postgresUrl.auth.split(":")[1],
            database: postgresUrl.pathname.substr(1)
        }
    }
};

module.exports = extend(config.base, config[environment]);
