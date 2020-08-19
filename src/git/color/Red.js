#!/usr/bin/env node

const Color = require("./Color");

class Red extends Color {
    code() {
        return `\\001\\033[0;31m\\002`;
    }
}

module.exports = Red;