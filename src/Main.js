#!/usr/bin/env node

const GitBranchColorStatus = require("./GitBranchColorStatus");
const Status = require("./git/Status");
const ColorFactory = require("./git/color/ColorFactory");
const BracketFactory = require("./bracket/BracketFactory");
const Branch = require("./git/Branch");
const StatusProcessorsFactory = require("./git/status-processor/StatusProcessorFactory");
const Symbols = require("./git/Symbols");

class Main {
    constructor() {
        this.branch = new Branch();
        this.gitStatus = new Status().status();
        this.colorFactory = new ColorFactory();
        this.bracketFactory = new BracketFactory();
        this.symbols = new Symbols(
            new StatusProcessorsFactory().allStatusProcessors(),
            this.gitStatus
        );
    }

    gitBranchColorStatus(isColored, bracketType) {
        return new GitBranchColorStatus(
            this.branch,
            this.colorFactory.build(this.gitStatus, isColored),
            this.bracketFactory.build(bracketType),
            this.symbols
        ).build();
    }
}

module.exports = Main;