#!/usr/bin/env bash

clear

echo
echo "----------------------------------------------------------------------------"
echo "This script installs the 'bilberry-hugo-theme' package with its dependencies"
echo "----------------------------------------------------------------------------"
echo ">>> Installing 'node_modules'..."

npm install

echo
echo ">>> Cleaning 'node_modules'..."

npm prune

echo ">>> Copying SASS Node dependencies to 'assets/_vendor'..."

if [ -d "assets/_vendor" ]
  then rm -rf assets/_vendor
fi

mkdir assets/_vendor assets/_vendor/fontawesome

cp node_modules/normalize.css/normalize.css assets/_vendor/normalize.scss
cp node_modules/skeleton-css/css/skeleton.css assets/_vendor/skeleton.scss
cp node_modules/flexslider/flexslider.css assets/_vendor/flexslider.scss
cp node_modules/tooltipster/dist/css/tooltipster.bundle.css assets/_vendor/tooltipster.scss
cp node_modules/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-light.min.css assets/_vendor/tooltipster-sideTip-light.scss
cp node_modules/magnific-popup/dist/magnific-popup.css assets/_vendor/magnific-popup.scss

cp node_modules/@fortawesome/fontawesome-free/css/brands.css assets/_vendor/fontawesome/brands.scss
cp node_modules/@fortawesome/fontawesome-free/css/regular.css assets/_vendor/fontawesome/regular.scss
cp node_modules/@fortawesome/fontawesome-free/css/solid.css assets/_vendor/fontawesome/solid.scss
cp node_modules/@fortawesome/fontawesome-free/css/fontawesome.css assets/_vendor/fontawesome/fontawesome.scss

echo ">>> Copying JavaScript Node dependencies to 'assets/js/_vendor'..."

if [ -d "assets/js/_vendor" ]
  then rm -rf assets/js/_vendor
fi

mkdir assets/js/_vendor

cp node_modules/clipboard/dist/clipboard.min.js assets/js/_vendor/clipboard.js
cp node_modules/flexslider/jquery.flexslider-min.js assets/js/_vendor/flexslider.js
cp node_modules/jquery/dist/jquery.min.js assets/js/_vendor/jquery.js
cp node_modules/magnific-popup/dist/jquery.magnific-popup.min.js assets/js/_vendor/magnific-popup.js
cp node_modules/tooltipster/dist/js/tooltipster.bundle.min.js assets/js/_vendor/tooltipster.js
cp node_modules/tooltipster/src/js/plugins/tooltipster/sideTip/tooltipster-sideTip.js assets/js/_vendor/tooltipster-sideTip.js

echo ">>> Copying fonts Node dependencies to 'static'..."

if [ -d "static/webfonts" ]
  then rm -rf static/webfonts
fi

cp -r node_modules/@fortawesome/fontawesome-free/webfonts static/webfonts

echo ">>> ... completed."
exit 0
