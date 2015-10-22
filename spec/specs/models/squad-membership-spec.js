"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var SquadMembership = rek("src/models/squad-membership")(sequelize);
var PermissionLevel = rek("src/enums/permission-level.js");

describe("SquadMembership model", function() {
    it("creates squad_memberships table", function(done) {
        SquadMembership.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testSquadMembership = {
        squad_id: 123,
        user_id: 456,
        permission: PermissionLevel.USER
    };

    var testSquadMembershipMatchObj = testSquadMembership;
    testSquadMembershipMatchObj.id = 1;

    it("creates SquadMembership", function(done) {
        SquadMembership.create(testSquadMembership)
            .then(function(squadMembership) {
                expect(squadMembership.dataValues).toEqual(testSquadMembershipMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds SquadMembership", function(done) {
        SquadMembership.findById(testSquadMembershipMatchObj.id)
            .then(function(squadMembership) {
                expect(squadMembership.dataValues).toEqual(testSquadMembershipMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
