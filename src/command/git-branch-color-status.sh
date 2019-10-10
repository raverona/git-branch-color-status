#!/usr/bin/env bash

COLOR_RED="\001\033[0;31m\002"
COLOR_YELLOW="\001\033[0;33m\002"
COLOR_GREEN="\001\033[0;32m\002"
COLOR_OCHRE="\001\033[38;5;95m\002"
COLOR_RESET="\001\033[0m\002"

NO_COLOR=$1

isGitFolder() {
    git rev-parse --git-dir > /dev/null 2>&1
}

isNotEmptyRepository() {
    git show-ref > /dev/null 2>&1
}

getGitBranch() {
    git rev-parse --abbrev-ref HEAD
}

getGitBranchRemote() {
    git for-each-ref --format='%(upstream:short)' "$(git symbolic-ref -q HEAD)"
}

getGitBranchAndStatus() {
	BRANCH=$(getGitBranch)
	STATUS=$(parseGitStatus)
	echo "[${BRANCH}${STATUS}]"
}

parseGitStatus() {
	status=$(git status 2>&1)
	dirty=$(echo -n "${status}" 2> /dev/null | grep "modified:" &> /dev/null; echo "$?")
	untracked=$(echo -n "${status}" 2> /dev/null | grep "Untracked files" &> /dev/null; echo "$?")
	ahead=$(echo -n "${status}" 2> /dev/null | grep "Your branch is ahead of" &> /dev/null; echo "$?")
	newfile=$(echo -n "${status}" 2> /dev/null | grep "new file:" &> /dev/null; echo "$?")
	renamed=$(echo -n "${status}" 2> /dev/null | grep "renamed:" &> /dev/null; echo "$?")
	deleted=$(echo -n "${status}" 2> /dev/null | grep "deleted:" &> /dev/null; echo "$?")
	bits=''
	if [ "${renamed}" == "0" ]; then
		bits=">${bits}"
	fi
	if [ "${ahead}" == "0" ]; then
		bits="*${bits}"
	fi
	if [ "${newfile}" == "0" ]; then
		bits="+${bits}"
	fi
	if [ "${untracked}" == "0" ]; then
		bits="?${bits}"
	fi
	if [ "${deleted}" == "0" ]; then
		bits="x${bits}"
	fi
	if [ "${dirty}" == "0" ]; then
		bits="!${bits}"
	fi
	if [ ! "${bits}" == "" ]; then
		echo " ${bits}"
	else
		echo ""
	fi
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
        if $NO_COLOR; then
          getGitBranchAndStatus;
        else
          echo -e "$(getGitBranchColor)$(getGitBranchAndStatus)$COLOR_RESET";
        fi
    fi
fi
