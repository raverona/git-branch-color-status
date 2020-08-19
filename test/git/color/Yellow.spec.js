const {expect} = require('chai');

const Yellow = require("../../../src/git/color/Yellow");

describe('Yellow', function () {
    let yellow = new Yellow();

    describe('#code()', function () {
        it('should return the correct color code for yellow', function () {
            expect(yellow.code()).to.be.equal("\\001\\033[0;33m\\002");
        });
    });
});