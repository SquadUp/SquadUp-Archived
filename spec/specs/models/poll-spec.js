"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var Poll = rek("src/models/poll")(sequelize);

describe("Poll model", function() {
    it("creates polls table", function(done) {
        Poll.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testPoll = {
        squad_id: 123,
        title: "TEST_POLL_TITLE",
        question: "TEST_POLL_QUESTION"
    };

    var testPollMatchObj = testPoll;
    testPollMatchObj.id = 1;

    it("creates Poll", function(done) {
        Poll.create(testPoll)
            .then(function(poll) {
                expect(poll.dataValues).toEqual(testPollMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds Poll", function(done) {
        Poll.findById(testPollMatchObj.id)
            .then(function(poll) {
                expect(poll.dataValues).toEqual(testPollMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
