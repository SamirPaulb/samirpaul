/**
 * Helper script for building and deploying
 * Deploys out of /dist/
 */

// Change these to match your Repo URL and the js.org domain
const gitRepo = "https://github.com/SamirPaul1/samirpaul"
const domainName = "samirpaul.js.org"
const distPath = "dist"

// build
const pkg = require('./package.json')
const shell = require('shelljs')

// navigate into the build output directory
shell.cd(distPath)

// Create the CNAME and commit the directory
shell.exec(`echo ${domainName} > CNAME`)
shell.exec('git init')
shell.exec('git add -A')
shell.exec(`git commit -m "deploy docs for ${pkg.version}"`)

// Push the project to the gh-pages branch
shell.exec(`git remote add origin ${gitRepo}`)
shell.exec('git push origin master:gh-pages -f')

shell.cd('-')
