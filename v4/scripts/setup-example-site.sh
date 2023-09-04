#!/usr/bin/env bash

clear

echo
echo "----------------------------------------------------------------------------"
echo "This script set ups the example site"
echo "----------------------------------------------------------------------------"

echo ">>> Setting up example site..."

if [ -d "tests/local" ]
  then rm -rf tests/local
fi

mkdir tests/local
cd tests/local || return
hugo new site exampleSite
rm exampleSite/archetypes/default.md
cp -r ../../exampleSite/* exampleSite

echo ">>> Updating 'config.toml'..."

sed -i "s/title = .*$/title = \"Dev Bilberry Test\"/" exampleSite/config.toml
sed -i "s/subtitle = .*$/subtitle = \"Running locally!\"/" exampleSite/config.toml
sed -i "s/theme = .*$/theme = \"..\/..\/..\/..\/..\/v4\"/" exampleSite/config.toml

echo ">>> ... completed."
exit 0
