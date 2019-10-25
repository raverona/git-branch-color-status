#!/usr/bin/env node

const shell = require('shelljs');
const gitBranchStatusScript = require.resolve('../git/GitBranchStatus.sh');
const gitBranchColorScript = require.resolve('../git/GitBranchColor.sh');

function setGitBranchColor(gitBranch) {
    let gitBranchColor = shell.exec(gitBranchColorScript, {silent: true}).stdout;
    return `${gitBranchColor}${gitBranch}\\001\\033[0m\\002`;
}

function applyColors(string) {
    return shell.exec(`\$(which echo) -ne "${string}"`, {silent: true}).stdout;
}

function getGitBranchStatus() {
    return shell.exec(gitBranchStatusScript, {silent: true}).stdout
}

function surroundWithBrackets(string, bracketType) {
    if (string)
        switch (bracketType) {
            case "square":
                return `[${string}]`;
            case "round":
                return `(${string})`;
            case "curly":
                return `{${string}}`;
            default:
                throw `Bracket type ${bracketType} not supported`
        }
}

function getGitBranchColorStatus(options) {
    let gitBranchColorStatus = surroundWithBrackets(getGitBranchStatus(), options.bracket);

    if (options.color) {
        gitBranchColorStatus = applyColors(setGitBranchColor(gitBranchColorStatus))
    }

    return gitBranchColorStatus
}

module.exports = {
    getGitBranchColorStatus
};