const {expect} = require('chai');

const Deleted = require("../../../src/git/status-processor/Deleted");

describe('Deleted', function () {
    let deleted = new Deleted();

    describe('#getSymbol()', function () {
        describe('when the status contains \'deleted:\'', function () {
            let status = "some git status the contains deleted: among other stuff";

            it('should return the symbol \'x\'', function () {
                expect(deleted.getSymbol(status)).to.be.equal("x")
            });
        });

        describe('when the status does not contains \'deleted:\'', function () {
            let status = "some git status the contains some stuff";

            it('should return an empty string', function () {
                expect(deleted.getSymbol(status)).to.be.equal("")
            });
        });
    });
});