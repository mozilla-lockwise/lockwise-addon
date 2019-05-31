#! /bin/bash

# Deploys a signed extension as a GitHub Release

VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]')
echo "Publish ${VERSION}"
ghr -t ${GITHUB_TOKEN} -u ${CIRCLE_PROJECT_USERNAME} -r ${CIRCLE_PROJECT_REPONAME} -c ${CIRCLE_SHA1} -recreate ${VERSION} ./addons/lockwise-signed.xpi
