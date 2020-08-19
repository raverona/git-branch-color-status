#!/usr/bin/env node

const StatusProcessor = require("./StatusProcessor");

class Dirty extends StatusProcessor {
    constructor() {
        super();
        this.symbol = "!";
        this.keyword = "modified:";
    }

    getSymbol(status) {
        return super.getSymbol(status, this.keyword, this.symbol);
    }
}

module.exports = Dirty;