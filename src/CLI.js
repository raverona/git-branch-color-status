#!/usr/bin/env node

const gitBranchColorStatus = require("./command/GitBranchColorStatus");

const args = require('yargs')
    .strict()
    .scriptName(getAppName())
    .usage("Usage: $0 [options]")
    .alias('v', 'version')
    .help("h")
    .alias("h", "help")
    .showHelpOnFail(false, "Specify --help for available options")
    .option('nc', {
        alias: 'no-color',
        describe: 'Output without color',
        type: 'boolean',
        default: false
    })
    .argv;

function getAppName() {
    return require('../package').name;
}

gitBranchColorStatus.getGitBranchColorStatus(args.noColor);