#!/usr/bin/env node

class GitBranchColorStatus {
    constructor(branch, color, bracket, symbols) {
        this.branch = branch;
        this.color = color;
        this.bracket = bracket;
        this.symbols = symbols;
    }

    build() {
        if (this.branch.isGitFolder)
            if (this.branch.isNotEmptyRepository)
                return `${this.color.color()}${this.bracket.open()}${this.branch.name()} ${this.symbols.printAll()}${this.bracket.close()}${this.color.reset()}`;
        return ``;
    }
}

module.exports = GitBranchColorStatus;