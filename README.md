# Git Branch Color Status

## What is this?

It's a small program to inform you the current state of your repository through symbols and colors on your terminal

## How does it work?

It's a Shell script that checks the state of the git repository present on the current directory and displays it thorugh symbols and colors

## Requirements

- [NodeJS](https://nodejs.org) and [NPM](https://www.npmjs.com/)
- [Bash](https://www.gnu.org/software/bash/)

## How to use it?

- Install it by executing `sudo npm install -g git-branch-color-status`
- Configure your PS1 on your .bashrc file like this `PS1+="\$(git-branch-color-status)";`

### Options available

- `--nc` or `--no-color` to output without color
- `-b` or `--bracket` to specify the type of brackets displayed surrounding the branch status
    - The available types of brackets are: "square" (default), "round" and "curly"

### Exemples

- `git-branch-color-status` outputs ![word "master" colored in green surrounded by square brackets](doc/img/examples/ColoredExample.png "colored branch name surrounded by square brackets")
- `git-branch-color-status --nc` outputs ![word "master" colored in white surrounded by square brackets](doc/img/examples/NoColorExample.png "non-colored branch name surrounded by square brackets") 
- `git-branch-color-status --nc --bracket=round` outputs ![word "master" colored in white surrounded by round brackets](doc/img/examples/NoColorRoundBracketExample.png "non-colored branch name surrounded by round brackets") 

## Symbols and Colors available

### Symbols

- `>` -> There are renamed files being tracked
- `*` -> Your branch is ahead of remote
- `+` -> There are new files being tracked
- `?` -> There are untracked files
- `x` -> There are deleted tracked files
- `!` -> There are modified tracked files

### Colors

- ![word "Green" colored in green](doc/img/text/GreenText.png "Green") -> Working tree clean, nothing to commit
- ![word "Yellow" colored in yellow](doc/img/text/YellowText.png "Yellow") -> Your branch is ahead of remote branch
- ![word "Red" colored in red](doc/img/text/RedText.png "Red") -> Working tree not clean

## How to contribute

Fork this project, push your changes and make a pull request
