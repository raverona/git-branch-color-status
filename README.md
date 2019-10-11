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

- `git-branch-color-status` produces ![word "master" in green surrounded by square brackets](doc/img/ColoredExample.png "colored branch name surrounded by square brackets")
- `git-branch-color-status --nc` produces ![word "master" in white surrounded by square brackets](doc/img/NoColorExample.png "non-colored branch name surrounded by square brackets") 
- `git-branch-color-status --nc --bracket=round` produces ![word "master" in white surrounded by round brackets](./doc/img/NoColorRoundBracketExample.png "non-colored branch name surrounded by round brackets") 

## Symbols and Colors available

### Symbols

- `>` -> There are renamed files being tracked
- `*` -> Your branch is ahead of remote
- `+` -> There are new files being tracked
- `?` -> There are untracked files
- `x` -> There are deleted tracked files
- `!` -> There are modified tracked files

### Colors

- ![#008000](https://placehold.it/15/008000/000000?text=+ "Green")`Green` -> Working tree clean, nothing to commit
- ![#ffff00](https://placehold.it/15/ffff00/000000?text=+ "Yellow")`Yellow` -> Your branch is ahead of remote branch
- ![#ff0000](https://placehold.it/15/ff0000/000000?text=+ "Red")`Red` -> Working tree not clean

## How to contribute

Fork this project, push your changes and make a pull request
