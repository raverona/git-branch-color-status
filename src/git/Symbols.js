#!/usr/bin/env node

class Symbols {
    constructor(statusProcessors) {
        this.statusProcessors = statusProcessors;
    }

    printAll() {
        return this.statusProcessors.map(
            (statusProcessor) =>
                statusProcessor.getSymbol()
        ).reduce(
            (acc, curr) =>
                acc + curr
        );
    }
}

module.exports = Symbols;