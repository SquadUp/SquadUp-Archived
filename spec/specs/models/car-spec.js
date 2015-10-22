"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var Car = rek("src/models/car")(sequelize);

describe("Car model", function() {
    it("creates cars table", function(done) {
        Car.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testCar = {
        user_id: 123,
        seats: 4
    };

    var testCarMatchObj = testCar;
    testCarMatchObj.id = 1;

    it("creates Car", function(done) {
        Car.create(testCar)
            .then(function(car) {
                expect(car.dataValues).toEqual(testCarMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds Car", function(done) {
        Car.findById(testCarMatchObj.id)
            .then(function(car) {
               expect(car.dataValues).toEqual(testCarMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
