const {expect} = require('chai');
const sinon = require('sinon');

const Branch = require("../../src/git/Branch");
const shell = require('shelljs');

describe('Branch', function () {
    let branch;

    describe('#name()', function () {
        beforeEach(function () {
            branch = new Branch();
        });

        describe('When the current branch has a remote counterpart', function () {
            before(function () {
                sinon.stub(shell, "exec").withArgs(`git branch -vv`, {silent: true}).callsFake(() => ({
                    stdout: `(HEAD detached at 2abbea4) 2abbea4 Another commit description
                             master                     2fceefd [origin/master] Some commit description
                             * test                     2fceefd [origin/test] Some commit description
                             test-with-no-remote        2fceefd Some commit description`
                }));
            });

            it('should return the name of the local branch', function () {
                expect(branch.name()).to.be.equal("test");
            });
        });

        describe('When the current branch does not has a remote counterpart', function () {
            before(function () {
                sinon.stub(shell, "exec").withArgs(`git branch -vv`, {silent: true}).callsFake(() => ({
                    stdout: `(HEAD detached at 2abbea4) 2abbea4 Another commit description
                             master                     2fceefd [origin/master] Some commit description
                             test                       2fceefd [origin/test] Some commit description
                             * test-with-no-remote      2fceefd Some commit description`
                }));
            });

            it('should return the name of the local branch', function () {
                expect(branch.name()).to.be.equal("test-with-no-remote");
            });
        });

        describe('When the current branch is detached', function () {
            before(function () {
                sinon.stub(shell, "exec").withArgs(`git branch -vv`, {silent: true}).callsFake(() => ({
                    stdout: `* (HEAD detached at 2abbea4) 2abbea4 Another commit description
                             master                       2fceefd [origin/master] Some commit description
                             test                         2fceefd [origin/test] Some commit description
                             test-with-no-remote          2fceefd Some commit description`
                }));
            });

            it('should return \'HEAD detached at <commit-hash>\'', function () {
                expect(branch.name()).to.be.equal("HEAD detached at 2abbea4");
            });
        });

        afterEach(function () {
            sinon.restore();
        });
    });
});