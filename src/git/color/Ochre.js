#!/usr/bin/env node

const Color = require("./Color");

class Ochre extends Color {
    code() {
        return `\\001\\033[38;5;95m\\002`;
    }
}

module.exports = Ochre;