"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var Location = rek("src/models/location")(sequelize);

describe("Location model", function() {
    it("creates locations table", function(done) {
        Location.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testLocation = {
        name: "TEST_LOCATION_NAME",
        lat: 123,
        long: 456
    };

    var testLocationMatchObj = testLocation;
    testLocationMatchObj.id = 1;

    it("creates Location", function(done) {
        Location.create(testLocation)
            .then(function(location) {
                expect(location.dataValues).toEqual(testLocationMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds Location", function(done) {
        Location.findById(testLocationMatchObj.id)
            .then(function(location) {
                expect(location.dataValues).toEqual(testLocationMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
