#!/bin/sh
if [ -z "$1" ];
then
  echo 'Add a deploy folder name as an argument: Ej: ./gh-deploy.sh dist'
  exit 1
fi
git subtree push --prefix $1 origin gh-pages
