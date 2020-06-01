#!/usr/bin/env node

const shell = require('shelljs');

class Git {
    isNotEmptyGitRepository() {
        return shell.exec(`git show-ref > /dev/null 2>&1`, {silent: true}).code === 0;
    }
}

module.exports = Git;