const { expect } = require('chai');

const RoundBracket = require("../../src/bracket/RoundBracket");

describe('RoundBracket', function () {
    let roundBracket = new RoundBracket();

    describe('#open', function () {
        it('should return \'(\'', function () {
            expect(roundBracket.open()).to.be.equal("(")
        });
    });

    describe('#close', function () {
        it('should return \')\'', function () {
            expect(roundBracket.close()).to.be.equal(")")
        });
    });
});