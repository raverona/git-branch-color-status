#!/usr/bin/env node

const StatusProcessor = require("./StatusProcessor");

class NewFile extends StatusProcessor {
    constructor() {
        super();
        this.symbol = "+";
        this.keyword = "new file:";
    }

    getSymbol(status) {
        return super.getSymbol(status, this.keyword, this.symbol);
    }
}

module.exports = NewFile;