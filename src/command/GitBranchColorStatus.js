#!/usr/bin/env node

const shell = require('shelljs');
const gitBranchColorStatus = require.resolve('./git-branch-color-status.sh');

module.exports = {
    getGitBranchColorStatus: function (noColor) {
        return shell.exec(`${gitBranchColorStatus} ${noColor}`, {silent: true}).stdout
    }
};