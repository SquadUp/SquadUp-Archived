"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var PollOption = rek("src/models/poll-option")(sequelize);

describe("PollOption model", function() {
    it("creates poll_options table", function(done) {
        PollOption.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testPollOption = {
        poll_id: 123,
        text: "TEST_POLL_TEXT"
    };

    var testPollOptionMatchObj = testPollOption;
    testPollOptionMatchObj.id = 1;

    it("creates PollOption", function(done) {
        PollOption.create(testPollOption)
            .then(function(pollOption) {
                expect(pollOption.dataValues).toEqual(testPollOptionMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds PollOption", function(done) {
        PollOption.findById(testPollOptionMatchObj.id)
            .then(function(pollOption) {
                expect(pollOption.dataValues).toEqual(testPollOptionMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
