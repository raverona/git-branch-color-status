#!/usr/bin/env node

const gitBranchColorStatus = require("./command/GitBranchColorStatus");

const args = require('yargs')
    .strict()
    .scriptName(getAppName())
    .usage("Usage: $0 [options]")
    .alias('v', 'version')
    .help('h')
    .alias('h', 'help')
    .showHelpOnFail(false, 'Specify --help for available options')
    .option('no-color', {
        alias: 'nc',
        describe: 'Output without color',
        type: 'boolean',
        default: false
    })
    .option('brackets', {
        alias: 'b',
        describe: 'Select brackets type',
        type: 'string',
        default: 'square',
        nargs: 1,
        choices: ['square', 'curly', 'round']
    })
    .argv;

function getAppName() {
    return require('../package').name;
}

process.stdout.write(gitBranchColorStatus.getGitBranchColorStatus(args.noColor));