#!/bin/sh

npm install
npm run generate
rm -rf .output

# disable jekyll to avoid any _problems
touch docs/.nojekyll

# commit, then deploy on GitHub Pages
git add .
git commit -m "Update dist folder"
git push