"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var PermissionLevel = rek("src/enums/permission-level");

describe("PermissionLevel Enum", function () {
    it("has 2 values", function () {
        expect(Object.keys(PermissionLevel).length).toBe(2);
    });

    describe("#ADMIN", function () {
        it("is defined", function () {
            expect(PermissionLevel.ADMIN).toBeDefined();
        });

        it("is a string", function() {
            expect(PermissionLevel.ADMIN).toBe("ADMIN");
        });
    });

    describe("#USER", function() {
        it("is defined", function() {
            expect(PermissionLevel.USER).toBeDefined();
        });

        it("is a string", function() {
            expect(PermissionLevel.USER).toBe("USER");
        });
    });
});
