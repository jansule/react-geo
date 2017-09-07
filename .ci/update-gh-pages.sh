#!/bin/sh
set -ex

if [ "$TRAVIS" != "true" ]; then
    # Only do something on travis
    echo "This script is supposed to be run inside the travis environment."
    return 1;
fi

if [ $TRAVIS_PULL_REQUEST != "false" ]; then
    # Dont build anything for PR requests, only for merges
    return 0;
fi

if [ $TRAVIS_BRANCH != "master" ]; then
    # only update when the target branch is master
    return 0;
fi

ORIGINAL_AUTHOR_NAME=$(git show -s --format="%aN" $TRAVIS_COMMIT)
ORIGINAL_AUTHOR_EMAIL=$(git show -s --format="%ae" $TRAVIS_COMMIT)

GH_PAGES_BRANCH=gh-pages
GH_PAGES_REPO_FROM_SLUG="github.com/terrestris/react-geo.git"
GH_PAGES_REPO="https://$GH_PAGES_REPO_FROM_SLUG"
GH_PAGES_REPO_AUTHENTICATED="https://$GHTOKEN@$GH_PAGES_REPO_FROM_SLUG"
GH_PAGES_DIR=/tmp/react-geo-gh-pages
GH_PAGES_COMMIT_MSG=$(cat <<EOF
Update resources on gh-pages branch

This commit was autogenerated by the 'update-gh-pages.sh' script.
EOF
)

mkdir -p $GH_PAGES_DIR

git config --global user.name "$ORIGINAL_AUTHOR_NAME"
git config --global user.email "$ORIGINAL_AUTHOR_EMAIL"

git clone --branch $GH_PAGES_BRANCH $GH_PAGES_REPO $GH_PAGES_DIR

cd $GH_PAGES_DIR

# the src directory containg the build artifacts
SRC_DIR=$TRAVIS_BUILD_DIR/build

# cleanup existing resources
rm -Rf ./examples ./docs

# copy the src dir from previous build folder
cp -r $SRC_DIR/examples/* .
cp -r $SRC_DIR/docs/* .

git add .
git commit -m "$GH_PAGES_COMMIT_MSG"
git push --quiet $GH_PAGES_REPO_AUTHENTICATED $GH_PAGES_BRANCH

rm -Rf $GH_PAGES_DIR
