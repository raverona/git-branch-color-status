const {expect} = require('chai');

const Dirty = require("../../../src/git/status-processor/Dirty");
const Ahead = require("../../../src/git/status-processor/Ahead");
const Deleted = require("../../../src/git/status-processor/Deleted");
const NewFile = require("../../../src/git/status-processor/NewFile");
const Untracked = require("../../../src/git/status-processor/Untracked");
const Renamed = require("../../../src/git/status-processor/Renamed");

const StatusProcessorFactory = require("../../../src/git/status-processor/StatusProcessorFactory");

describe('StatusProcessorFactory', function () {
    let statusProcessorFactory = new StatusProcessorFactory();

    describe('#allStatusProcessors()', function () {
        it('should be an array', function () {
            expect(statusProcessorFactory.allStatusProcessors()).to.be.an("array")
        });

        it('should have the dirty processor', function () {
            expect(statusProcessorFactory.allStatusProcessors()).to.deep.include(new Dirty())
        });

        it('should have the ahead processor', function () {
            expect(statusProcessorFactory.allStatusProcessors()).to.deep.include(new Ahead())
        });

        it('should have the deleted processor', function () {
            expect(statusProcessorFactory.allStatusProcessors()).to.deep.include(new Deleted())
        });

        it('should have the newfile processor', function () {
            expect(statusProcessorFactory.allStatusProcessors()).to.deep.include(new NewFile())
        });

        it('should have the untracked processor', function () {
            expect(statusProcessorFactory.allStatusProcessors()).to.deep.include(new Untracked())
        });

        it('should have the renamed processor', function () {
            expect(statusProcessorFactory.allStatusProcessors()).to.deep.include(new Renamed())
        });
    });
});