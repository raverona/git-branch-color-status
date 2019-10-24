#!/usr/bin/env bash

isGitFolder() {
    git rev-parse --git-dir > /dev/null 2>&1
}

isNotEmptyRepository() {
    git show-ref > /dev/null 2>&1
}

getGitBranch() {
    git rev-parse --abbrev-ref HEAD
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

getGitBranchAndStatus() {
	BRANCH=$(getGitBranch)
	STATUS=$(parseGitStatus)
	echo "${BRANCH}${STATUS}"
}

if isGitFolder; then
    if isNotEmptyRepository; then
        echo -n "$(getGitBranchAndStatus)";
    fi
fi