"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var PollVote = rek("src/models/poll-vote")(sequelize);

describe("PollVote model", function() {
    it("creates poll_votes table", function(done) {
        PollVote.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testPollVote = {
        poll_id: 123,
        user_id: 456
    };

    var testPollVoteMatchObj = testPollVote;
    testPollVoteMatchObj.id = 1;

    it("creates PollVote", function(done) {
        PollVote.create(testPollVote)
            .then(function(pollVote) {
                expect(pollVote.dataValues).toEqual(testPollVoteMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds PollVote", function(done) {
        PollVote.findById(testPollVoteMatchObj.id)
            .then(function(pollVote) {
                expect(pollVote.dataValues).toEqual(testPollVoteMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
