const {expect} = require('chai');

const Untracked = require("../../../src/git/status-processor/Untracked");

describe('Untracked', function () {
    let untracked = new Untracked();

    describe('#getSymbol()', function () {
        describe('when the status contains \'Untracked files\'', function () {
            let status = "some git status the contains Untracked files among other stuff";

            it('should return the symbol \'?\'', function () {
                expect(untracked.getSymbol(status)).to.be.equal("?")
            });
        });

        describe('when the status does not contains \'Untracked files\'', function () {
            let status = "some git status the contains some stuff";

            it('should return an empty string', function () {
                expect(untracked.getSymbol(status)).to.be.equal("")
            });
        });
    });
});