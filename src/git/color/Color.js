#!/usr/bin/env node

class Color {
    reset() {
        return `\\001\\033[0m\\002`;
    }
}

module.exports = Color;