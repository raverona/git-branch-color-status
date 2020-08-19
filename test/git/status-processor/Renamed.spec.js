const {expect} = require('chai');

const Renamed = require("../../../src/git/status-processor/Renamed");

describe('Renamed', function () {
    let renamed = new Renamed();

    describe('#getSymbol()', function () {
        describe('when the status contains \'renamed:\'', function () {
            let status = "some git status the contains renamed: among other stuff";

            it('should return the symbol \'>\'', function () {
                expect(renamed.getSymbol(status)).to.be.equal(">")
            });
        });

        describe('when the status does not contains \'renamed:\'', function () {
            let status = "some git status the contains some stuff";

            it('should return an empty string', function () {
                expect(renamed.getSymbol(status)).to.be.equal("")
            });
        });
    });
});