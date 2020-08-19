#!/usr/bin/env node

class StatusProcessor {
    getSymbol(status, keyword, symbol) {
        return status.includes(keyword) ? symbol : "";
    }
}

module.exports = StatusProcessor;