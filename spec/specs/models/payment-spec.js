"use strict";

// NPM require
var rek = require("rekuire");

// Project require
var sequelize = rek("spec/specs/models/get-sequelize-helper");
var Payment = rek("src/models/payment")(sequelize);

describe("Payment model", function() {
    it("creates payments table", function(done) {
        Payment.sync({ force: true })
            .then(function() {
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    var testPayment = {
        to_user_id: 123,
        from_user_id: 456,
        amount: 789
    };

    var testPaymentMatchObj = testPayment;
    testPaymentMatchObj.id = 1;

    it("creates Payment", function(done) {
        Payment.create(testPayment)
            .then(function(payment) {
                expect(payment.dataValues).toEqual(testPaymentMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });

    it("finds Payment", function(done) {
        Payment.findById(testPaymentMatchObj.id)
            .then(function(payment) {
                expect(payment.dataValues).toEqual(testPaymentMatchObj);
                done();
            }).catch(function(err) {
                throw err;
            });
    });
});
