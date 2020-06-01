const {expect} = require('chai');

const Red = require("../../../src/git/color/Red");
const Yellow = require("../../../src/git/color/Yellow");
const Green = require("../../../src/git/color/Green");
const Ochre = require("../../../src/git/color/Ochre");
const NoColor = require("../../../src/git/color/NoColor");

const ColorFactory = require("../../../src/git/color/ColorFactory");

describe('ColorFactory', function () {
    let colorFactory = new ColorFactory();
    let status = "";

    describe('#build()', function () {

        describe('If isColored is true', function () {
            let isColored = true;

            describe('When status does not mention \'working tree clean\'', function () {
                before(function () {
                    status = "some git status";
                });

                it('should return an instance of Red', function () {
                    expect(colorFactory.build(status, isColored)).to.be.instanceOf(Red);
                });
            });

            describe('When status mentions \'working tree clean\' and \'Your branch is ahead of\'', function () {
                before(function () {
                    status = "some git status that has working tree clean and Your branch is ahead of among other stuff";
                });

                it('should return an instance of Yellow', function () {
                    expect(colorFactory.build(status, isColored)).to.be.instanceOf(Yellow);
                });
            });

            describe('When status mentions \'working tree clean\' and \'nothing to commit\'', function () {
                before(function () {
                    status = "some git status that has working tree clean and nothing to commit among other stuff";
                });

                it('should return an instance of Green', function () {
                    expect(colorFactory.build(status, isColored)).to.be.instanceOf(Green);
                });
            });

            describe('When status mentions \'working tree clean\' but does not mentions \'Your branch is ahead of\' and \'nothing to commit\'', function () {
                before(function () {
                    status = "some git status that has working tree clean among other stuff";
                });

                it('should return an instance of Ochre', function () {
                    expect(colorFactory.build(status, isColored)).to.be.instanceOf(Ochre);
                });
            });
        });

        describe('If isColored is false', function () {
            let isColored = false;

            it('should return an instance of NoColor', function () {
                expect(colorFactory.build(status, isColored)).to.be.instanceOf(NoColor);
            });
        });
    });
});