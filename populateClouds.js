const fetch = require('node-fetch')
const fs = require('fs')

async function insertCloudTable(pathIn, pathOut) {
  const template = fs.readFileSync(pathIn, 'utf8')
  const response = await fetch(
    `https://compliance.sovereignit.cloud/markdown/table`
  )
  const text = template.replace('<!--CLOUDS-->', await response.text())
  fs.writeFileSync(pathOut, text, 'utf8')
}

insertCloudTable(
  `standards/certification/overview.template.md`,
  `standards/certification/overview.md`
).catch((e) => {
  console.log(e)
})
