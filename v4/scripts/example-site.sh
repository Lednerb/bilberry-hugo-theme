#!/usr/bin/env bash

clear

echo
echo "----------------------------------------------------------------------------"
echo "This script starts the example site"
echo "----------------------------------------------------------------------------"


echo ">>> Creating example site..."

if [ -d "tests/local" ]
  then rm -rf tests/local
fi

mkdir tests/local
cd tests/local
hugo new site my-new-blog
rm my-new-blog/archetypes/default.md
cp -r ../../exampleSite/* my-new-blog

echo ">>> Updating 'config.toml'..."

sed -i "s/title = .*$/title = \"Dev Bilberry Test\"/" my-new-blog/config.toml
sed -i "s/subtitle = .*$/subtitle = \"Running locally!\"/" my-new-blog/config.toml
sed -i "s/theme = .*$/theme = \"..\/..\/..\/..\/..\/v4\"/" my-new-blog/config.toml

echo ">>> Starting Hugo server..."

cd my-new-blog
hugo server --buildDrafts --buildFuture

echo ">>> ... completed."
exit 0
