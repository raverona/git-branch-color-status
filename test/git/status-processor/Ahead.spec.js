const {expect} = require('chai');

const Ahead = require("../../../src/git/status-processor/Ahead");

describe('Ahead', function () {
    let ahead = new Ahead();

    describe('#getSymbol()', function () {
        describe('when the status contains \'Your branch is ahead of\'', function () {
            let status = "some git status the contains Your branch is ahead of among other stuff";

            it('should return the symbol \'*\'', function () {
                expect(ahead.getSymbol(status)).to.be.equal("*")
            });
        });

        describe('when the status does not contains \'Your branch is ahead of\'', function () {
            let status = "some git status the contains some stuff";

            it('should return an empty string', function () {
                expect(ahead.getSymbol(status)).to.be.equal("")
            });
        });
    });
});