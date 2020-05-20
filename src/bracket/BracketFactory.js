#!/usr/bin/env node

const RoundBracket = require("./RoundBracket");
const CurlyBracket = require("./CurlyBracket");
const SquareBracket = require("./SquareBracket");

class BracketFactory {
    build(type) {
        switch (type) {
            case "round":
                return new RoundBracket();
            case "curly":
                return new CurlyBracket();
            case "square":
                return new SquareBracket();
            default:
                throw new Error("Invalid bracket type");
        }
    }
}

module.exports = BracketFactory;