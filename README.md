# Git Branch Color Status

## What is this?

It's a small program to inform you the current state of your repository through symbols and colors on your terminal

## How does it work?

It's a Shell script that checks the state of the git repository present on the current directory and displays it thorugh symbols and colors

## Requirements

- [NodeJS](https://nodejs.org) and [NPM](https://www.npmjs.com/)
- [Bash](https://www.gnu.org/software/bash/)

## How to use it?

- Install it by executing `npm install`
- Configure your PS1 on your .bashrc file like this `PS1+="\$(git-branch-color-status)";`

You could use `--no-color` option to disabled color in prompt.

## Symbols and Colors available

### Symbols

- \>
- \*
- \+
- ?
- x
- !

### Colors

- Green
- Yellow
- Red

## How to contribute

Fork this project, push your changes and make a pull request
