"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var Event = rek("src/models/event")(sequelize);

describe("Event model", function() {
    it("creates events table", function(done) {
        Event.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testEvent = {
        squad_id: 123,
        name: "TEST_EVENT_NAME",
        location_id: 456,
        date_time: new Date()
    };

    var testEventMatchObj = testEvent;
    testEventMatchObj.id = 1;

    it("creates Event", function(done) {
        Event.create(testEvent)
            .then(function(event) {
                expect(event.dataValues).toEqual(testEventMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds Event", function(done) {
        Event.findById(testEventMatchObj.id)
            .then(function(event) {
                expect(event.dataValues).toEqual(testEventMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});


