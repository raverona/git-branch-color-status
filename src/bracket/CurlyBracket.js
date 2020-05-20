#!/usr/bin/env node

class CurlyBracket {
    open() {
        return "{";
    }

    close() {
        return "}";
    }
}

module.exports = CurlyBracket;