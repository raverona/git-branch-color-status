#!/usr/bin/env node

class GitBranchColorStatus {
    constructor(branch, color, bracket, symbols) {
        this.branch = branch;
        this.color = color;
        this.bracket = bracket;
        this.symbols = symbols;
    }

    build() {
        return `${this.color.code()}${this.bracket.open()}${this.branch.name()} ${this.symbols.printAll()}${this.bracket.close()}${this.color.reset()}`;
    }
}

module.exports = GitBranchColorStatus;