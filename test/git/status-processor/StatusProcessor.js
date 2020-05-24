const {expect} = require('chai');

const StatusProcessor = require("../../../src/git/status-processor/StatusProcessor");

describe('StatusProcessor', function () {
    let statusProcessor = new StatusProcessor();

    describe('#getSymbol()', function () {
        let keyword = "a keyword";
        let symbol = "a symbol";

        describe('when the status contains keyword', function () {
            let status = `some status with ${keyword} and other stuff`;

            it('should return the symbol \'!\'', function () {
                expect(statusProcessor.getSymbol(status, keyword, symbol)).to.be.equal(symbol)
            });
        });

        describe('when the status does not contain keyword', function () {
            let status = "some status with some stuff";

            it('should return an empty string', function () {
                expect(statusProcessor.getSymbol(status, keyword, symbol)).to.be.equal("")
            });
        });
    });
});