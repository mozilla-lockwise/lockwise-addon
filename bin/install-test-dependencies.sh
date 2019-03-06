#!/bin/bash
set -ex

## Copied from https://github.com/mozilla/testpilot/blob/master/bin/circleci/install-test-dependencies.sh

GECKODRIVER_URL=$(
  curl -s 'https://api.github.com/repos/mozilla/geckodriver/releases/latest' |
  python -c "import sys, json; r = json.load(sys.stdin); print([a for a in r['assets'] if 'linux64' in a['name']][0]['browser_download_url']);"
);

curl -L -o geckodriver.tar.gz $GECKODRIVER_URL
gunzip -c geckodriver.tar.gz | tar xopf -
chmod +x geckodriver
sudo mv geckodriver /bin
geckodriver --version
# Install pip
sudo apt-get install python-pip python-dev build-essential
sudo pip install --upgrade pip

sudo pip install tox mozdownload mozinstall==1.15

mkdir -p ~/project/firefox-downloads/
find  ~/project/firefox-downloads/ -type f -mtime +90 -delete
mozdownload --version latest --destination ~/project/firefox-downloads/firefox/
mozdownload --version latest-beta --destination ~/project/firefox-downloads/firefox_dev/
mozdownload --version latest --type daily --destination ~/project/firefox-downloads/firefox_nightly/

# Dependencies for firefox
sudo apt-get update && sudo apt-get install -y libgtk3.0-cil-dev libasound2 libasound2 libdbus-glib-1-2 libdbus-1-3

# install firefox-dev
mozinstall $(ls -t ~/project/firefox-downloads/firefox_dev/*.tar.bz2 | head -1)
alias firefox=~/project/firefox/firefox
firefox --version
