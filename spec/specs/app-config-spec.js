"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var config = rek("shared/config/app/get-config");

describe("#database", function() {
    it("is defined", function() {
        expect(config.database).toBeDefined();
    });

    describe("required values are defined", function() {
        it("#host is defined", function() {
            expect(config.database.host).toBeDefined();
        });

        it("#user is defined", function() {
            expect(config.database.user).toBeDefined();
        });

        it("#password is defined", function() {
            expect(config.database.password).toBeDefined();
        });

        it("#database is defined", function() {
            expect(config.database.database).toBeDefined();
        });
    });
});
