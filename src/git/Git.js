#!/usr/bin/env node

const shell = require('shelljs');

class Git {
    isGitFolder() {
        return shell.exec(`git rev-parse --git-dir > /dev/null 2>&1`, {silent: true}).code === 0;
    }

    isNotEmptyRepository() {
        return shell.exec(`git show-ref > /dev/null 2>&1`, {silent: true}).code === 0;
    }
}

module.exports = Git;