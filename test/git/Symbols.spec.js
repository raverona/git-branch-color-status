const {expect} = require('chai');

const Symbols = require("../../src/git/Symbols");

describe('Symbols', function () {
    let symbols = new Symbols([
        {getSymbol: (status) => "symbol1"},
        {getSymbol: (status) => "symbol2"},
        {getSymbol: (status) => "symbol3"}
    ], "status");

    describe('#printAll()', function () {
        it('should return the concatenation of the call of every status processor getSymbol function', function () {
            expect(symbols.printAll()).to.be.equal("symbol1symbol2symbol3")
        });
    });
});