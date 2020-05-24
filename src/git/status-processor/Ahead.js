#!/usr/bin/env node

const StatusProcessor = require("./StatusProcessor");

class Ahead extends StatusProcessor {
    constructor() {
        super();
        this.symbol = "*";
        this.keyword = "Your branch is ahead of";
    }

    getSymbol(status) {
        return super.getSymbol(status, this.keyword, this.symbol);
    }
}

module.exports = Ahead;