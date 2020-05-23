const {expect} = require('chai');
const sinon = require('sinon');

const Git = require("../src/git/Git");
const Branch = require("../src/git/Branch");
const Red = require("../src/git/color/Red");
const SquareBracket = require("../src/bracket/SquareBracket");
const Symbols = require("../src/git/symbol/Symbols");

const GitBranchColorStatus = require("../src/GitBranchColorStatus");

describe('GitBranchColorStatus', function () {
    let git = new Git();
    let branch = new Branch();
    let color = new Red();
    let bracket = new SquareBracket();
    let symbols = new Symbols();

    const colorRed = "\\001\\033[0;32m\\002";
    const openSquareBracket = "[";
    const branchName = "master";
    const allSymbols = ">*+?x!";
    const closeSquareBracket = "]";
    const colorReset = "\\001\\033[0m\\002";

    const gitBranchColorStatus = new GitBranchColorStatus(git, branch, color, bracket, symbols);

    before(function () {
        sinon.stub(color, "code").callsFake(() => colorRed);
        sinon.stub(bracket, "open").callsFake(() => openSquareBracket);
        sinon.stub(branch, "name").callsFake(() => branchName);
        sinon.stub(symbols, "printAll").callsFake(() => allSymbols);
        sinon.stub(bracket, "close").callsFake(() => closeSquareBracket);
        sinon.stub(color, "reset").callsFake(() => colorReset);
    });

    describe('#build()', function () {
        let isGitFolderStub;
        let isNotEmptyRepositoryStub;

        describe('When the current directory is a git folder', function () {
            before(function () {
                isGitFolderStub = sinon.stub(git, "isGitFolder").callsFake(() => true);
            });

            describe('and it is not an empty repository', function () {
                before(function () {
                    isNotEmptyRepositoryStub = sinon.stub(git, "isNotEmptyRepository").callsFake(() => true);
                });

                it('should return the color code followed by the opening bracket, the branch name, a space, the symbols, the closing bracket and the color reset code', function () {
                    expect(gitBranchColorStatus.build()).to.be.equal(`${colorRed}${openSquareBracket}${branchName} ${allSymbols}${closeSquareBracket}${colorReset}`);
                });
            });

            describe('and it is an empty repository', function () {
                before(function () {
                    isNotEmptyRepositoryStub = sinon.stub(git, "isNotEmptyRepository").callsFake(() => false);
                });

                it('should return an empty string', function () {
                    expect(gitBranchColorStatus.build()).to.be.equal("");
                });
            });

            afterEach(function () {
                isNotEmptyRepositoryStub.restore();
            });
        });

        describe('When the current directory is not a git folder', function () {
            before(function () {
                isGitFolderStub = sinon.stub(git, "isGitFolder").callsFake(() => false);
            });

            it('should return an empty string', function () {
                expect(gitBranchColorStatus.build()).to.be.equal("");
                isGitFolderStub.restore();
            });
        });

        afterEach(function () {
            isGitFolderStub.restore();
        });
    });
});