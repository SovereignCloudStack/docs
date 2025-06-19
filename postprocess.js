'use strict'

const fs = require('fs-extra')
const path = require('path')
const recursiveReaddir = require('recursive-readdir')

const buildDirectory = path.join(__dirname, 'build')
const absoluteUrlRegExp = /(href|src)="(?!http[s]|ftp?:\/\/)([^"|#]+)"/g

const isDirectory = (dirPath) => path.extname(dirPath) === ''

const convertAbsolutePathsToRelative = (content, filePath) =>
  content.replace(absoluteUrlRegExp, (_absoluteUrl, $1, $2) => {
    const currentDirPath = path.dirname(filePath)
    const relativeDirPath =
      currentDirPath === '.' ? '.' : path.relative(currentDirPath, '')

    let relativePath = path.join(relativeDirPath, $2)
    if (isDirectory(relativePath)) {
      relativePath = path.join(relativePath, 'index.html')
    }

    return `${$1}="${relativePath}"`
  })

const websiteTextualFileExtensions = ['.css', '.js', '.html', '.xml']
const isNotWebsiteTextualFile = (filePath, stats) =>
  !(
    stats.isDirectory() ||
    websiteTextualFileExtensions.includes(path.extname(filePath))
  )

const postProcess = async () => {
  const filePaths = await recursiveReaddir(buildDirectory, [
    isNotWebsiteTextualFile
  ])
  await Promise.all(
    filePaths.map(async (filePath) => {
      const content = await fs.readFile(filePath)
      const relativePath = path.relative(buildDirectory, filePath)
      await fs.writeFile(
        filePath,
        convertAbsolutePathsToRelative(String(content), relativePath)
      )
    })
  )
}

postProcess()
