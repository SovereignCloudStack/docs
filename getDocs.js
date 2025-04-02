const fs = require('fs')
const { execSync } = require('child_process')

// Read the contents of the "docs.package.json" file and remove all whitespace
const reposJson = fs
  .readFileSync('./docs.package.json', 'utf8')
  .replace(/\s/g, '')

// Parse the JSON and create an array of repositories
const repos = JSON.parse(reposJson)
const ghUrl = 'https://github.com/'

// Clone each repository, remove git folders and README files, and copy the docs to the target directory
repos.forEach((repo) => {
  const repoDir = `repo_to_be_edited/${repo.label}`

  // If the repo contains "cluster-stacks", clone the "restructure_container" branch
  const branchOption = repo.repo.includes('cluster-stacks')
    ? '--branch docs/r8 '
    : ''
  const cloneCommand = `git clone ${branchOption}${
    ghUrl + repo.repo
  } ${repoDir}`

  console.log(`Cloning: ${cloneCommand}`)
  execSync(cloneCommand)

  // Remove git folders
  execSync(`rm -rf ${repoDir}/.git`)

  // Remove README files
  execSync(`find ${repoDir} -name "README.md" | xargs rm -f`)

  // Create the docusaurus subdirectory
  const subDirPath = `${repo.target}/${repo.label}`
  fs.mkdirSync(subDirPath, { recursive: true })

  // Copy docs content from A to B
  let sources = Array.isArray(repo.source) ? repo.source : [repo.source]
  sources.forEach((source) => {
    execSync(`cp -r ${repoDir}/${source} ${subDirPath}`)
  })

  // Remove the cloned repository
  execSync('rm -rf repo_to_be_edited')
})
