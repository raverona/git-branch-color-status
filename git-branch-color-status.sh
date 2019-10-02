COLOR_RED="\e[0;31m"
COLOR_YELLOW="\e[0;33m"
COLOR_GREEN="\e[0;32m"
COLOR_OCHRE="\e[38;5;95m"
COLOR_RESET="\e[0m"

function isGitFolder {
    git rev-parse --git-dir > /dev/null 2>&1
}

function isNotEmptyRepository {
    git show-ref > /dev/null 2>&1
}

function getGitBranch {
    git rev-parse --abbrev-ref HEAD
}

function getGitBranchRemote {
    git \for-each-ref --format='%(upstream:short)' $(git symbolic-ref -q HEAD)
}

function getGitBranchAndStatus {
	BRANCH=$(getGitBranch)
	STAT=$(parseGitStatus)
	echo "[${BRANCH}${STAT}]"
}

function parseGitStatus {
	status=`git status 2>&1`
	dirty=`echo -n "${status}" 2> /dev/null | grep "modified:" &> /dev/null; echo "$?"`
	untracked=`echo -n "${status}" 2> /dev/null | grep "Untracked files" &> /dev/null; echo "$?"`
	ahead=`echo -n "${status}" 2> /dev/null | grep "Your branch is ahead of" &> /dev/null; echo "$?"`
	newfile=`echo -n "${status}" 2> /dev/null | grep "new file:" &> /dev/null; echo "$?"`
	renamed=`echo -n "${status}" 2> /dev/null | grep "renamed:" &> /dev/null; echo "$?"`
	deleted=`echo -n "${status}" 2> /dev/null | grep "deleted:" &> /dev/null; echo "$?"`
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

function getGitBranchColor {
  git_status="$(git status 2> /dev/null)"
  # git_local_commits="$(git log origin/$(getGitBranch)..HEAD)"

  # echo $git_local_commits

  if [[ ! $git_status =~ "working tree clean" ]]; then
    echo -e $COLOR_RED
  elif [[ $git_status =~ "Your branch is ahead of" ]]; then
    echo -e $COLOR_YELLOW
  elif [[ $git_status =~ "nothing to commit" ]]; then
    echo -e $COLOR_GREEN
  else
    echo -e $COLOR_OCHRE
  fi
}

if isGitFolder; then 
    if isNotEmptyRepository; then 
        echo $(getGitBranchColor)$(getGitBranchAndStatus);
    fi
fi
