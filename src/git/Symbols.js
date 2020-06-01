#!/usr/bin/env node

class Symbols {
    constructor(statusProcessors, status) {
        this.statusProcessors = statusProcessors;
        this.status = status;
    }

    printAll() {
        let symbols = this.statusProcessors.map(
            (statusProcessor) =>
                statusProcessor.getSymbol(this.status)
        ).reduce(
            (acc, curr) =>
                acc + curr
        );
        return symbols ? ` ${symbols}` : ``;
    }
}

module.exports = Symbols;