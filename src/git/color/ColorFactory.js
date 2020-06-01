#!/usr/bin/env node

const Red = require("./Red");
const Yellow = require("./Yellow");
const Green = require("./Green");
const Ochre = require("./Ochre");
const NoColor = require("./NoColor");

class ColorFactory {
    build(status, isColored) {
        if (isColored) return this.buildColored(status);
        return this.buildUncolored();
    }

    buildColored(status) {
        if (!status.match(/working tree clean/)) {
            return new Red();
        } else if (status.match(/Your branch is ahead of/)) {
            return new Yellow();
        } else if (status.match(/nothing to commit/)) {
            return new Green();
        } else {
            return new Ochre();
        }
    }

    buildUncolored() {
        return new NoColor();
    }
}

module.exports = ColorFactory;