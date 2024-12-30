#!/bin/sh

npm install
npx nuxi generate --dotenv .github.env
rm -rf .output

# disable jekyll to avoid any _problems
touch docs/.nojekyll

# commit, then deploy on GitHub Pages
git add .
git commit -m "Update docs folder"
git push