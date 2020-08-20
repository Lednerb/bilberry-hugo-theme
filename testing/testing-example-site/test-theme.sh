#!/bin/bash

set -e

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

TARGET_DIR="$DIR/public"

"${DIR}"/setup-theme.sh


ERROR_COUNT=0
incErrorCount () {
  ERROR_COUNT=$((ERROR_COUNT + 1))
}

cleanBuildHugo () {
  rm -rf $TARGET_DIR
  cd "$DIR" && hugo
}

fail () {
  incErrorCount
  echo "$1"
  echo "Exiting now..."
  exit 1
}

failButContinue () {
  incErrorCount
  echo "! $1"
}

testFolderAndContinue () {
  if [ ! -d "$1" ]; then
    failButContinue "Expected '$(realpath --relative-to="$TARGET_DIR" "$1")' but does not exist"
  fi
}

testContentAndContinue () {

  local FILE
  FILE=$2
  local TEST_CONTENT
  TEST_CONTENT=$1
  local OUT
  set +e
  OUT=$(grep -w "$TEST_CONTENT" "$FILE")
  set -e

  if [[ -z $OUT ]]; then
    failButContinue "Expected to find '$TEST_CONTENT' in file '$(realpath --relative-to="$TARGET_DIR" "$FILE")'"
  fi

}


cleanBuildHugo

if [ ! -d "$TARGET_DIR" ]; then
  fail "Compile failed - '$TARGET_DIR' does not exist"
fi

if [ ! -d "$TARGET_DIR" ]; then
  failButContinue "Expected '$TARGET_DIR' but does not exist"
fi

echo "# Umlauts tests"
testFolderAndContinue "$TARGET_DIR/author/ä-ß+"

testFolderAndContinue "$TARGET_DIR/article/täst"
testFolderAndContinue "$TARGET_DIR/de/article/täst"

testFolderAndContinue "$TARGET_DIR/categories/täst++"
testFolderAndContinue "$TARGET_DIR/de/categories/täst++"

testFolderAndContinue "$TARGET_DIR/tags/c++"
testFolderAndContinue "$TARGET_DIR/de/tags/c++"

testFolderAndContinue "$TARGET_DIR/tags/tästing++"
testFolderAndContinue "$TARGET_DIR/de/tags/tästing++"

# article/täst [en]
echo "## Testing article/täst [en]"
testContentAndContinue '<a href="https://example.com/categories/t%C3%A4st&#43;&#43;/">Täst&#43;&#43;</a>' "$TARGET_DIR/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/author/%C3%A4-%C3%9F&#43;/">ä ß&#43;</a>' "$TARGET_DIR/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/tags/c&#43;&#43;/">C&#43;&#43;</a>' "$TARGET_DIR/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/tags/t%C3%A4sting&#43;&#43;/">tästing&#43;&#43;</a>' "$TARGET_DIR/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/de/article/t%C3%A4st/">de</a>' "$TARGET_DIR/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/article/t%C3%A4st/">Umlauts Täst&#43;&#43;</a>' "$TARGET_DIR/article/täst/index.html"
testContentAndContinue '<p>This is a umlauts-test in Quotes äüöß++</p>' "$TARGET_DIR/quote/index.html"
testContentAndContinue '<a href="/categories/t%C3%A4st&#43;&#43;">Täst&#43;&#43;
                        (2)</a>' "$TARGET_DIR/article/täst/index.html"

# article/täst [de]
echo "## Testing article/täst [de]"
testContentAndContinue '<a href="https://example.com/de/categories/t%C3%A4st&#43;&#43;/">Täst&#43;&#43;</a>' "$TARGET_DIR/de/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/de/author/%C3%A4-%C3%9F&#43;/">ä ß&#43;</a>' "$TARGET_DIR/de/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/de/tags/c&#43;&#43;/">C&#43;&#43;</a>' "$TARGET_DIR/de/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/de/tags/t%C3%A4sting&#43;&#43;/">tästing&#43;&#43;</a>' "$TARGET_DIR/de/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/article/t%C3%A4st/">en</a>' "$TARGET_DIR/de/article/täst/index.html"
testContentAndContinue '<a href="https://example.com/de/article/t%C3%A4st/">de Umlauts Täst&#43;&#43;</a>' "$TARGET_DIR/de/article/täst/index.html"
testContentAndContinue '<p>de This is a umlauts-test in quotes äüöß++</p>' "$TARGET_DIR/de/quote/index.html"
testContentAndContinue '<a href="/de/categories/t%C3%A4st&#43;&#43;">Täst&#43;&#43;
                        (2)</a>' "$TARGET_DIR/de/article/täst/index.html"

# quote/täst-quote [en]
echo "## Testing quote/täst-quote [en]"
testContentAndContinue '<a href="/author/%c3%a4-%c3%9f&#43;">
  ä ß&#43;
</a>' "$TARGET_DIR/quote/täst-quote/index.html"

# quote/täst-quote [de]
echo "## Testing quote/täst-quote [de]"
testContentAndContinue '<a href="/de/author/%c3%a4-%c3%9f&#43;">
  ä ß&#43;
</a>' "$TARGET_DIR/de/quote/täst-quote/index.html"


echo "# Build stability test"

BUILD_COUNT=100
for ((i=0; i<BUILD_COUNT; i++)) ; do
 echo "Building ($i)"
 cleanBuildHugo > /dev/null
 rm -rf "$TARGET_DIR$i"
 mv "$TARGET_DIR" "$TARGET_DIR$i"
done

DIFF_OUT=""
set +e
for ((i=1; i<BUILD_COUNT; i++)) ; do
 echo "Calculating differences between $i and $((i-1))"
 DIFF_OUT="$DIFF_OUT$(diff -rq "$TARGET_DIR$i" "$TARGET_DIR$((i-1))")"
done
set -e

if [[ $DIFF_OUT != "" ]]; then
   failButContinue "Build is instable! expected to receive no differences but was: $DIFF_OUT"
fi



echo "Tests finished with $ERROR_COUNT errors"
exit $ERROR_COUNT
