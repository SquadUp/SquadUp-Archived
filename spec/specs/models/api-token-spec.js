"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var ApiToken = rek("src/models/api-token")(sequelize);

describe("ApiToken model", function() {
   it("sync with postgresql", function() {
        expect(true).toBe(true);
       // TODO Make model tests
   });
});
