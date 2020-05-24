const {expect} = require('chai');

const Symbols = require("../../src/git/Symbols");

describe('Symbols', function () {
    let symbols = new Symbols([
        {getSymbol: () => "symbol1"},
        {getSymbol: () => "symbol2"},
        {getSymbol: () => "symbol3"}
    ]);

    describe('#printAll()', function () {
        it('should return the concatenation of the call of every status processor getSymbol function', function () {
            expect(symbols.printAll()).to.be.equal("symbol1symbol2symbol3")
        });
    });
});