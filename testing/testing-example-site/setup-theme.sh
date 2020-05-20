#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"


THEME_TARGET_FOLDER="$DIR/themes/bilberry-hugo-theme"

rm -rf "$THEME_TARGET_FOLDER" && true
mkdir -p "$THEME_TARGET_FOLDER"

cp -r "$DIR/../../archetypes" "$THEME_TARGET_FOLDER"
cp -r "$DIR/../../assets" "$THEME_TARGET_FOLDER"
cp -r "$DIR/../../i18n" "$THEME_TARGET_FOLDER"
cp -r "$DIR/../../images" "$THEME_TARGET_FOLDER"
cp -r "$DIR/../../layouts" "$THEME_TARGET_FOLDER"
cp -r "$DIR/../../static" "$THEME_TARGET_FOLDER"
cp -r "$DIR/../../theme.toml" "$THEME_TARGET_FOLDER"
cp -r "$DIR/../../webpack.mix.js" "$THEME_TARGET_FOLDER"
