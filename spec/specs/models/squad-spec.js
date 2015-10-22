"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var Squad = rek("src/models/squad")(sequelize);

describe("Squad model", function() {
    it("creates squads table", function(done) {
        Squad.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testSquad = {
        name: "TEST_SQUAD_NAME",
        description: "TEST_SQUAD_DESCRIPTION",
        avatar_uri: "TEST_SQUAD_AVATAR_URI"
    };

    var testSquadMatchObj = testSquad;
    testSquadMatchObj.id = 1;

    it("creates Squad", function(done) {
        Squad.create(testSquad)
            .then(function(squad) {
                expect(squad.dataValues).toEqual(testSquadMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds Squad", function(done) {
        Squad.findById(testSquadMatchObj.id)
            .then(function(squad) {
                expect(squad.dataValues).toEqual(testSquadMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
