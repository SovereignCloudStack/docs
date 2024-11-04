const fetch = require('node-fetch')
const fs = require('fs')
const YAML = require('yaml')

async function fetchScopeTable(uuid, title, path) {
  const response = await fetch(
    `https://compliance.sovereignit.cloud/markdown/scope/${uuid}`
  )
  var text = await response.text()
  text = `# ${title}\n\n${text}`
  fs.writeFileSync(path, text, 'utf8')
}

// how many outdated versions of any scope to include
const MAX_OLD = 1

const filenames = fs
  .readdirSync('standards/')
  .filter((fn) => fn.startsWith('scs-') && fn.endsWith('.yaml'))

const scopes = filenames.map((filename) => {
  return {
    ...YAML.parseDocument(
      fs.readFileSync(`standards/${filename}`, 'utf8')
    ).toJSON(),
    filename,
    id: filename.substring(0, filename.length - 5)
  }
})

const today = new Date().toISOString().slice(0, 10)

const sidebarItems = scopes.map((scope) => {
  fetchScopeTable(scope.uuid, scope.name, `standards/${scope.id}.md`).catch(
    (e) => {
      console.log(e)
    }
  )
  return {
    type: 'doc',
    label: scope.name,
    id: scope.id
  }
})

var newSidebars = `module.exports = ${JSON.stringify(sidebarItems, null, '  ')}`
fs.writeFileSync('./sidebarsCertificationItems.js', newSidebars, 'utf8')
