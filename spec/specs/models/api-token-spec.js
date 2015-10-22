"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var ApiToken = rek("src/models/api-token")(sequelize);

describe("ApiToken model", function () {
    it("creates api_token table", function(done) {
        ApiToken.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testApiToken = {
        user_id: 123,
        token: "TEST_API_TOKEN",
        expires_on: new Date()
    };

    var testApiTokenMatchObj = testApiToken;
    testApiTokenMatchObj.id = 1;

    it("creates ApiToken", function(done) {
        ApiToken.create(testApiToken)
            .then(function(apiToken) {
                expect(apiToken.dataValues).toEqual(testApiTokenMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds ApiToken", function(done) {
        ApiToken.findById(testApiTokenMatchObj.id)
            .then(function(apiToken) {
                expect(apiToken.dataValues).toEqual(testApiTokenMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
