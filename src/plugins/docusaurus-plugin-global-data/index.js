const path = require('path')
const fs = require('fs').promises // Use fs.promises for async/await

function globalDataPlugin(context, options) {
  return {
    name: 'global-data-plugin',

    async loadContent() {
      const data = {}

      const datasetPaths = {
        architecturalOverviewData: 'static/data/architecturalOverviewData.json',
        additionalResourcesData: 'static/data/additionalResourcesData.json',
        featureContentData: 'static/data/featureContentData.json'
        // Add more datasets here
      }

      for (const [key, filePath] of Object.entries(datasetPaths)) {
        const jsonFilePath = path.join(context.siteDir, filePath)
        data[key] = JSON.parse(await fs.readFile(jsonFilePath, 'utf8'))
      }

      return data
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions
      setGlobalData(content)
    }
  }
}

module.exports = globalDataPlugin
