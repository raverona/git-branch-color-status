const {expect} = require('chai');

const Green = require("../../../src/git/color/Green");

describe('Green', function () {
    let green = new Green();

    describe('#code()', function () {
        it('should return the correct color code for green', function () {
            expect(green.code()).to.be.equal("\\001\\033[0;32m\\002");
        });
    });
});