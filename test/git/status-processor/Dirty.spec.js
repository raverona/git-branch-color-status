const {expect} = require('chai');

const Dirty = require("../../../src/git/status-processor/Dirty");

describe('Dirty', function () {
    let dirty = new Dirty();

    describe('#getSymbol()', function () {
        describe('when the status contains \'modified:\'', function () {
            let status = "some git status the contains modified: among other stuff";

            it('should return the symbol \'!\'', function () {
                expect(dirty.getSymbol(status)).to.be.equal("!")
            });
        });

        describe('when the status does not contains \'modified:\'', function () {
            let status = "some git status the contains some stuff";

            it('should return an empty string', function () {
                expect(dirty.getSymbol(status)).to.be.equal("")
            });
        });
    });
});