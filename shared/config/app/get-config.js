"use strict";

// NPM require
var fs = require("fs");
var rek = require("rekuire");

// Project require
let configPath = "shared/config/app/config.js";

if (!fs.existsSync(configPath)) {
    throw "Can not start without \"" + configPath + "\" file";
}

var config = rek(configPath);

module.exports = config;
