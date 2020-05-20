const {expect} = require('chai');
const sinon = require('sinon');

const Red = require("../../../src/git/color/Red");
const Yellow = require("../../../src/git/color/Yellow");
const Green = require("../../../src/git/color/Green");
const Ochre = require("../../../src/git/color/Ochre");

const Status = require("../../../src/git/Status");

const ColorFactory = require("../../../src/git/color/ColorFactory");

describe('ColorFactory', function () {
    let colorFactory = new ColorFactory();
    let status = new Status();

    describe('#build()', function () {
        it('should return an instance of Red when status does not mention \'working tree clean\'', function () {
            const stub = sinon.stub(status, "status").callsFake(() => "some git status");

            expect(colorFactory.build(status)).to.be.instanceOf(Red);

            stub.restore();
        });

        it('should return an instance of Yellow when status mentions \'working tree clean\' and \'Your branch is ahead of\'', function () {
            const stub = sinon.stub(status, "status").callsFake(() => "some git status that has working tree clean and Your branch is ahead of among other stuff");

            expect(colorFactory.build(status)).to.be.instanceOf(Yellow);

            stub.restore();
        });

        it('should return an instance of Green when status mentions \'working tree clean\' and \'nothing to commit\'', function () {
            const stub = sinon.stub(status, "status").callsFake(() => "some git status that has working tree clean and nothing to commit among other stuff");

            expect(colorFactory.build(status)).to.be.instanceOf(Green);

            stub.restore();
        });

        it('should return an instance of Ochre when status mentions \'working tree clean\' but does not mentions \'Your branch is ahead of\' and \'nothing to commit\'', function () {
            const stub = sinon.stub(status, "status").callsFake(() => "some git status that has working tree clean among other stuff");

            expect(colorFactory.build(status)).to.be.instanceOf(Ochre);

            stub.restore();
        });
    });
});