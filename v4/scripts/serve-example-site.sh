#!/usr/bin/env bash

set -euo pipefail

clear || true

echo
echo "----------------------------------------------------------------------------"
echo "This script serves the example site"
echo "----------------------------------------------------------------------------"

echo ">>> Preparing temporary local config..."

TMP_CONFIG=$(mktemp /tmp/bilberry-example-site.XXXXXX.toml)
trap 'rm -f "$TMP_CONFIG"' EXIT
THEME_DIR=$(pwd)

cp exampleSite/hugo.toml "$TMP_CONFIG"
sed -i "s|path = \"github.com/Lednerb/bilberry-hugo-theme/v4\"|path = \"$THEME_DIR\"|" "$TMP_CONFIG"

echo ">>> Starting Hugo server..."

cd exampleSite || return
hugo server --config "$TMP_CONFIG" --buildDrafts --buildFuture

echo ">>> ... completed."
exit 0
