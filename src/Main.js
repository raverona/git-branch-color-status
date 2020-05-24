#!/usr/bin/env node

const GitBranchColorStatus = require("./GitBranchColorStatus");
const Git = require("./git/Git");
const Status = require("./git/Status");
const ColorFactory = require("./git/color/ColorFactory");
const BracketFactory = require("./bracket/BracketFactory");
const Branch = require("./git/Branch");
const StatusProcessorsFactory = require("./git/status-processor/StatusProcessorFactory");
const Symbols = require("./git/Symbols");

class Main {
    constructor() {
        this.git = new Git();
        this.branch = new Branch();
        this.gitStatus = new Status();
        this.colorFactory = new ColorFactory();
        this.bracketFactory = new BracketFactory();
        this.symbols = new Symbols(new StatusProcessorsFactory().allStatusProcessors())
    }

    gitBranchColorStatus(isColored, bracketType) {
        return new GitBranchColorStatus(
            this.git,
            this.branch,
            this.colorFactory.build(this.gitStatus, isColored),
            this.bracketFactory.build(bracketType),
            this.symbols
        ).build()
    }
}

module.exports = Main;