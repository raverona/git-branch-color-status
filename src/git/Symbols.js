#!/usr/bin/env node

class Symbols {
    constructor(statusProcessors, status) {
        this.statusProcessors = statusProcessors;
        this.status = status;
    }

    printAll() {
        return this.statusProcessors.map(
            (statusProcessor) =>
                statusProcessor.getSymbol(this.status)
        ).reduce(
            (acc, curr) =>
                acc + curr
        );
    }
}

module.exports = Symbols;