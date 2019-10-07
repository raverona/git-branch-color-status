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

## Symbols and Colors available

### Symbols

- \> -> There are renamed files being tracked
- \* -> Your branch is ahead of remote
- \+ -> There are new files being tracked
- ? -> There are untracked files
- x -> There are deleted tracked files
- ! -> There are modified tracked files

### Colors

- Green -> Working tree clean, nothing to commit
- Yellow -> Your branch is ahead of remote branch
- Red -> Working tree not clean

## How to contribute

Fork this project, push your changes and make a pull request
