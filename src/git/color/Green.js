#!/usr/bin/env node

const Color = require("./Color");

class Green extends Color {
    code() {
        return `\\001\\033[0;32m\\002`;
    }
}

module.exports = Green;