#!/usr/bin/env bash

clear

echo
echo "----------------------------------------------------------------------------"
echo "This script set ups and builds the example site"
echo "----------------------------------------------------------------------------"

./scripts/setup-example-site.sh

echo ">>> Building example site..."

cd tests/local/exampleSite || return
hugo --environment development --buildDrafts --buildFuture

echo ">>> ... completed."
exit 0
