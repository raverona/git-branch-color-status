#!/usr/bin/env node

const Color = require("./Color");

class NoColor extends Color {
    code() {
        return ``;
    }
}

module.exports = NoColor;