#!/usr/bin/env node

const shell = require('shelljs');

class Branch {
    constructor() {
        this.branchInfo = this.currentBranchInfo()
    }

    allBranchesInfo() {
        return shell.exec(`git branch -vv`, {silent: true}).stdout;
    }

    currentBranchInfoRegex() {
        let branchInfosRegex = {
            asterisk: /\*/.source,
            detachedHead: /\([a-zA-Z0-9\s]+\)/.source,
            localBranchName: /[^\s]*/.source,
            lastCommitHash: /[a-zA-z0-9]+/.source,
            remoteBranchName: /\[[^\s]+\/[^\s]+]/.source,
            lastCommitMessage: /[^\n]*|[^\n\r]*/.source
        };

        return new RegExp(
            `${branchInfosRegex.asterisk}\\s` +
                    `(${branchInfosRegex.detachedHead}|${branchInfosRegex.localBranchName})\\s+` +
                    `(${branchInfosRegex.lastCommitHash})\\s` +
                    `(${branchInfosRegex.remoteBranchName})?\\s?` +
                    `(${branchInfosRegex.lastCommitMessage})`
        )
    }

    removeLeadingOrTrailingBrackets(string) {
        return string.replace(/(\)$|])/, "").replace(/(^\(|^\[)/, "");
    }

    currentBranchInfo() {
        let currentBranchInfo = this.allBranchesInfo().match(this.currentBranchInfoRegex());

        return {
            name: this.removeLeadingOrTrailingBrackets(currentBranchInfo[1]),
            lastCommitHash: currentBranchInfo[2],
            remoteBranch: this.removeLeadingOrTrailingBrackets(currentBranchInfo[3] || ""),
            lastCommitMessage: currentBranchInfo[4]
        }
    }

    name() {
        return this.branchInfo.name;
    }
}

module.exports = Branch;