const {expect} = require('chai');

const Ochre = require("../../../src/git/color/Ochre");

describe('Ochre', function () {
    let ochre = new Ochre();

    describe('#code()', function () {
        it('should return the correct color code for ochre', function () {
            expect(ochre.code()).to.be.equal("\\001\\033[38;5;95m\\002");
        });
    });
});