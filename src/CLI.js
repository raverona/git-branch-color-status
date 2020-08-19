#!/usr/bin/env node

const Main = require("./Main");
const Git = require("./git/Git");

const args = require('yargs')
    .strict()
    .scriptName(getAppName())
    .usage("Usage: $0 [options]")
    .alias('v', 'version')
    .help('h')
    .alias('h', 'help')
    .showHelpOnFail(false, 'Specify --help for available options')
    .option('color', {
        alias: 'c',
        describe: 'Enable or disable output with color',
        type: 'boolean',
        default: true,
        nargs: 0
    })
    .option('bracket', {
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

if (new Git().isNotEmptyGitRepository()) {
    new Main().writeToSdtOut(args.color, args.bracket)
}