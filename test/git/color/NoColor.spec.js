const {expect} = require('chai');

const NoColor = require("../../../src/git/color/NoColor");

describe('NoColor', function () {
    let noColor = new NoColor();

    describe('#code()', function () {
        it('should return the correct color code for noColor', function () {
            expect(noColor.code()).to.be.equal("");
        });
    });
});