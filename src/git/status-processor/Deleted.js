#!/usr/bin/env node

const StatusProcessor = require("./StatusProcessor");

class Deleted extends StatusProcessor {
    constructor() {
        super();
        this.symbol = "x";
        this.keyword = "deleted:";
    }

    getSymbol(status) {
        return super.getSymbol(status, this.keyword, this.symbol);
    }
}

module.exports = Deleted;