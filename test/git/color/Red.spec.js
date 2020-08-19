const {expect} = require('chai');

const Red = require("../../../src/git/color/Red");

describe('Red', function () {
    let red = new Red();

    describe('#code()', function () {
        it('should return the correct color code for red', function () {
            expect(red.code()).to.be.equal("\\001\\033[0;31m\\002");
        });
    });
});