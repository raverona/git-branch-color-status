#!/usr/bin/env node

class RoundBracket {
    open() {
        return "(";
    }

    close() {
        return ")";
    }
}

module.exports = RoundBracket;