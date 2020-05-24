#!/usr/bin/env node

const StatusProcessor = require("./StatusProcessor");

class Untracked extends StatusProcessor {
    constructor() {
        super();
        this.symbol = "?";
        this.keyword = "Untracked files";
    }

    getSymbol(status) {
        return super.getSymbol(status, this.keyword, this.symbol);
    }
}

module.exports = Untracked;