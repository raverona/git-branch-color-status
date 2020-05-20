const { expect } = require('chai');
const sinon = require('sinon');

const Branch = require("../src/git/Branch");
const Red = require("../src/git/color/Red");
const SquareBracket = require("../src/bracket/SquareBracket");
const Symbols = require("../src/git/Symbols");

const GitBranchColorStatus = require("../src/GitBranchColorStatus");

describe('GitBranchColorStatus', function () {
    let branch = new Branch();
    let color = new Red();
    let bracket = new SquareBracket();
    let symbols = new Symbols();

    let colorRed = "\\001\\033[0;32m\\002";
    let openSquareBracket = "[";
    let branchName = "master";
    let allSymbols = ">*+?x!";
    let closeSquareBracket = "]";
    let colorReset = "\\001\\033[0m\\002";

    before(function () {
        sinon.stub(color, "code").callsFake(() => colorRed);
        sinon.stub(bracket, "open").callsFake(() => openSquareBracket);
        sinon.stub(branch, "name").callsFake(() => branchName);
        sinon.stub(symbols, "printAll").callsFake(() => allSymbols);
        sinon.stub(bracket, "close").callsFake(() => closeSquareBracket);
        sinon.stub(color, "reset").callsFake(() => colorReset);
    });

    describe('#build()', function () {
        it('should return the color code followed by the opening bracket, the branch name, a space, the symbols, the closing bracket and the color reset code', function () {
            let gitBranchColorStatus = new GitBranchColorStatus(branch, color, bracket, symbols);

            expect(gitBranchColorStatus.build()).to.be.equal(`${colorRed}${openSquareBracket}${branchName} ${allSymbols}${closeSquareBracket}${colorReset}`);
        });
    });
});