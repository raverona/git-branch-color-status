#!/usr/bin/env node

const StatusProcessor = require("./StatusProcessor");

class Renamed extends StatusProcessor {
    constructor() {
        super();
        this.symbol = ">";
        this.keyword = "renamed:";
    }

    getSymbol(status) {
        return super.getSymbol(status, this.keyword, this.symbol);
    }
}

module.exports = Renamed;