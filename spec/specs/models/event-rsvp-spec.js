"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var EventRSVP = rek("src/models/event-rsvp")(sequelize);

describe("EventRSVP model", function() {
    it("creates event_rsvps table", function(done) {
        EventRSVP.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testEventRSVP = {
        event_id: 123,
        user_id: 456,
        attending: true,
        car_id: 789
    };

    var testEventRSVPMatchObj = testEventRSVP;
    testEventRSVPMatchObj.id = 1;

    it("creates EventRSVP", function(done) {
        EventRSVP.create(testEventRSVPMatchObj)
            .then(function(eventRSVP) {
                expect(eventRSVP.dataValues).toEqual(testEventRSVPMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds EventRSVP", function(done) {
        EventRSVP.findById(testEventRSVPMatchObj.id)
            .then(function(eventRSVP) {
                expect(eventRSVP.dataValues).toEqual(testEventRSVPMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
