const {expect} = require('chai');
const sinon = require('sinon');

const Git = require("../../src/git/Git");
const shell = require('shelljs');

describe('Git', function () {
    let git = new Git();

    describe('#isNotEmptyRepository()', function () {
        describe('when \'git show-ref\' return code is zero', function () {
            before(function () {
                sinon.stub(shell, "exec").withArgs(`git show-ref > /dev/null 2>&1`, {silent: true}).callsFake(() => ({
                    code: 0
                }))
            });

            it('should return true', function () {
                expect(git.isNotEmptyGitRepository()).to.be.equal(true)
            });
        });

        describe('when \'git show-ref\' return code is not zero', function () {
            before(function () {
                sinon.stub(shell, "exec").withArgs(`git show-ref > /dev/null 2>&1`, {silent: true}).callsFake(() => ({
                    code: 128
                }))
            });

            it('should return false', function () {
                expect(git.isNotEmptyGitRepository()).to.be.equal(false)
            });
        });
    });

    afterEach(function () {
        sinon.restore()
    });
});