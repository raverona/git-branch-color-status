const {expect} = require('chai');

const NewFile = require("../../../src/git/status-processor/NewFile");

describe('NewFile', function () {
    let newFile = new NewFile();

    describe('#getSymbol()', function () {
        describe('when the status contains \'new file:\'', function () {
            let status = "some git status the contains new file: among other stuff";

            it('should return the symbol \'+\'', function () {
                expect(newFile.getSymbol(status)).to.be.equal("+")
            });
        });

        describe('when the status does not contains \'new file:\'', function () {
            let status = "some git status the contains some stuff";

            it('should return an empty string', function () {
                expect(newFile.getSymbol(status)).to.be.equal("")
            });
        });
    });
});