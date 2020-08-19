const { expect } = require('chai');

const CurlyBracket = require("../../src/bracket/CurlyBracket");

describe('CurlyBracket', function () {
    let curlyBracket = new CurlyBracket();

    describe('#open', function () {
        it('should return \'{\'', function () {
            expect(curlyBracket.open()).to.be.equal("{")
        });
    });

    describe('#close', function () {
        it('should return \'}\'', function () {
            expect(curlyBracket.close()).to.be.equal("}")
        });
    });
});