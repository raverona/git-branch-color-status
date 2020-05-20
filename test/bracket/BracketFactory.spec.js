const { expect } = require('chai');

const BracketFactory = require("../../src/bracket/BracketFactory");
const RoundBracket = require("../../src/bracket/RoundBracket");
const CurlyBracket = require("../../src/bracket/CurlyBracket");
const SquareBracket = require("../../src/bracket/SquareBracket");

describe('BracketFactory', function () {
    describe('#build()', function () {
        let bracket = new BracketFactory();

        it('should build a RoundBracket object if the type supplied is \'round\'', function () {
            expect(new BracketFactory().build("round")).to.be.instanceOf(RoundBracket);
        });

        it('should build a CurlyBracket object if the type supplied is \'curly\'', function () {
            expect(new BracketFactory().build("curly")).to.be.instanceOf(CurlyBracket);
        });

        it('should build a SquareBracket object if the type supplied is \'square\'', function () {
            expect(new BracketFactory().build("square")).to.be.instanceOf(SquareBracket);
        });

        it('should throw an Error if a type different than \'round\', \'curly\' or \'square\' is supplied', function () {
            expect(() => bracket.build("some weird type")).to.throw(Error, "Invalid bracket type");
        });

        it('should throw an Error if an empty type is supplied', function () {
            expect(() => bracket.build("")).to.throw(Error, "Invalid bracket type");
        });

        it('should throw an Error if undefined is supplied', function () {
            expect(() => bracket.build(undefined)).to.throw(Error, "Invalid bracket type");
        });

        it('should throw an Error if null is supplied', function () {
            expect(() => bracket.build(null)).to.throw(Error, "Invalid bracket type");
        });

        it('should throw an Error if no type is supplied', function () {
            expect(() => bracket.build()).to.throw(Error, "Invalid bracket type");
        });
    });
});