#!/usr/bin/env node

const Color = require("./Color");

class Yellow extends Color {
    code() {
        return `\\001\\033[0;33m\\002`;
    }
}

module.exports = Yellow;