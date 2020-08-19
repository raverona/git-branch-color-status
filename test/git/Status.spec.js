const {expect} = require('chai');
const sinon = require('sinon');

const Status = require("../../src/git/Status");
const shell = require('shelljs');

describe('Status', function () {
    let status = new Status();
    let gitFakeStatus = "On branch master\n" +
        "Your branch is up to date with 'origin/master'.\n" +
        "\n" +
        "nothing to commit, working tree clean";

    describe('#status()', function () {
        before(function () {
            sinon.stub(shell, "exec").withArgs(`git status 2> /dev/null`, {silent: true}).callsFake(() => ({
                stdout: gitFakeStatus
            }))
        });

        it('should return the status of the branch on the current directory', function () {
            expect(status.status()).to.be.equal(gitFakeStatus)
        });

        after(function () {
            sinon.restore()
        });
    });
});