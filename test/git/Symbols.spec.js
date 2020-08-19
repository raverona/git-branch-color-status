const {expect} = require('chai');

const Symbols = require("../../src/git/Symbols");

describe('Symbols', function () {
    let symbols;

    describe('#printAll()', function () {
        describe('when the symbol processors return symbols', function () {
            before(function () {
                symbols = new Symbols([
                    {getSymbol: (status) => "symbol1"},
                    {getSymbol: (status) => "symbol2"},
                    {getSymbol: (status) => "symbol3"}
                ], "status");
            });

            it('should return a space and the concatenation of the call of every status processor getSymbol function', function () {
                expect(symbols.printAll()).to.be.equal(" symbol1symbol2symbol3")
            });
        });

        describe('when the symbol processors do not return any symbols', function () {
            before(function () {
                symbols = new Symbols([
                    {getSymbol: (status) => ""},
                    {getSymbol: (status) => ""},
                    {getSymbol: (status) => ""}
                ], "status");
            });

            it('should return an empty string', function () {
                expect(symbols.printAll()).to.be.equal("")
            });
        });
    });
});