#!/usr/bin/env node

const Red = require("./Red");
const Yellow = require("./Yellow");
const Green = require("./Green");
const Ochre = require("./Ochre");

class ColorFactory {
    build(status) {
        if (!status.status().match(/working tree clean/)) {
            return new Red();
        } else if (status.status().match(/Your branch is ahead of/)) {
            return new Yellow();
        } else if (status.status().match(/nothing to commit/)) {
            return new Green();
        } else {
            return new Ochre();
        }
    }
}

module.exports = ColorFactory;