const {expect} = require('chai');

const Color = require("../../../src/git/color/Color");

describe('Color', function () {
    let color = new Color();

    describe('#reset()', function () {
        it('should return the correct color reset code', function () {
            expect(color.reset()).to.be.equal("\\001\\033[0m\\002");
        });
    });
});