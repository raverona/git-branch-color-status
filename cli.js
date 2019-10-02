#!/usr/bin/env node

const shell = require('shelljs')
const git_brach_color_status = require.resolve('./git-branch-color-status.sh')

shell.exec(git_brach_color_status).stdout