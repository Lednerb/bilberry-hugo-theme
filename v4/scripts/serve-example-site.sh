#!/usr/bin/env bash

clear

echo
echo "----------------------------------------------------------------------------"
echo "This script set ups and serve the example site"
echo "----------------------------------------------------------------------------"

./scripts/setup-example-site.sh

echo ">>> Starting Hugo server..."

cd tests/local/exampleSite
hugo server --buildDrafts --buildFuture

echo ">>> ... completed."
exit 0
