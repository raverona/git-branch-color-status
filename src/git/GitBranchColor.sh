#!/usr/bin/env bash

COLOR_RED="\001\033[0;31m\002"
COLOR_YELLOW="\001\033[0;33m\002"
COLOR_GREEN="\001\033[0;32m\002"
COLOR_OCHRE="\001\033[38;5;95m\002"

isGitFolder() {
    git rev-parse --git-dir > /dev/null 2>&1
}

isNotEmptyRepository() {
    git show-ref > /dev/null 2>&1
}

getGitBranch() {
    git rev-parse --abbrev-ref HEAD
}

getGitBranchColor() {
  git_status="$(git status 2> /dev/null)"

  if [[ ! $git_status =~ "working tree clean" ]]; then
    echo "$COLOR_RED"
  elif [[ $git_status =~ "Your branch is ahead of" ]]; then
    echo "$COLOR_YELLOW"
  elif [[ $git_status =~ "nothing to commit" ]]; then
    echo "$COLOR_GREEN"
  else
    echo "$COLOR_OCHRE"
  fi
}

if isGitFolder; then
    if isNotEmptyRepository; then
        echo -n "$(getGitBranchColor)";
    fi
fi
