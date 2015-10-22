"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var User = rek("src/models/user")(sequelize);

describe("User model", function() {
    it("creates users table", function(done) {
        User.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testUser = {
        email: "TEST_USER_EMAIL",
        first_name: "TEST_USER_FIRST_NAME",
        last_name: "TEST_USER_LAST_NAME",
        avatar_uri: "TEST_USER_AVATAR_URI",
        location_id: 123
    };

    var testUserMatchObj = testUser;
    testUserMatchObj.id = 1;

    it("creates User", function(done) {
        User.create(testUser)
            .then(function(user) {
                expect(user.dataValues).toEqual(testUserMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds User", function(done) {
        User.findById(testUserMatchObj.id)
            .then(function(user) {
                expect(user.dataValues).toEqual(testUserMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
