#!/bin/sh
if [[ -z "$1" ]]; then
then
  echo 'Which folder do you want to deploy?'
  exit 1
fi
git subtree push --prefix $1 origin gh-pages
