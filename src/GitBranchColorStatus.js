#!/usr/bin/env node

class GitBranchColorStatus {
    constructor(git, branch, color, bracket, symbols) {
        this.git = git;
        this.branch = branch;
        this.color = color;
        this.bracket = bracket;
        this.symbols = symbols;
    }

    build() {
        if (this.git.isGitFolder())
            if (this.git.isNotEmptyRepository())
                return `${this.color.code()}${this.bracket.open()}${this.branch.name()} ${this.symbols.printAll()}${this.bracket.close()}${this.color.reset()}`;
        return ``;
    }
}

module.exports = GitBranchColorStatus;