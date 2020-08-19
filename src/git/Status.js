#!/usr/bin/env node

const shell = require('shelljs');

class Status {
    status() {
        return shell.exec(`git status 2> /dev/null`, {silent: true}).stdout;
    }
}

module.exports = Status;