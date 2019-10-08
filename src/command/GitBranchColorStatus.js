#!/usr/bin/env node

const shell = require('shelljs');
const git_branch_color_status = require.resolve('./git-branch-color-status.sh');

module.exports = {
    getGitBranchColorStatus: function(noColor) {
        shell.exec(git_branch_color_status).stdout;
    }
};