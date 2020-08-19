#!/usr/bin/env node

const Dirty = require("./Dirty");
const Ahead = require("./Ahead");
const Deleted = require("./Deleted");
const NewFile = require("./NewFile");
const Untracked = require("./Untracked");
const Renamed = require("./Renamed");

class StatusProcessorFactory {
    allStatusProcessors() {
        return [
            new Dirty(),
            new Ahead(),
            new Deleted(),
            new NewFile(),
            new Untracked(),
            new Renamed()
        ]
    }
}

module.exports = StatusProcessorFactory;