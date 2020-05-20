const { expect } = require('chai');

const SquareBracket = require("../../src/bracket/SquareBracket");

describe('SquareBracket', function () {
    let squareBracket = new SquareBracket();

    describe('#open', function () {
        it('should return \'[\'', function () {
            expect(squareBracket.open()).to.be.equal("[")
        });
    });

    describe('#close', function () {
        it('should return \']\'', function () {
            expect(squareBracket.close()).to.be.equal("]")
        });
    });
});