const fs = require('fs')

sidebars = require('./sidebarsStandards.js')
sidebars.standards.splice(3)
sidebarItems = []
sidebars.standards[2].items = sidebarItems

fns = fs.readdirSync('standards/').filter((fn) => fn.startsWith('scs-') && fn.endsWith('.md') && !fn.startsWith('scs-X'))

keys = ['title', 'type', 'status', 'track', 'stabilized_at', 'obsoleted_at', 'replaces', 'authors', 'state']

// use the ISO string, because so do the standard documents, and we can use string comparison with ISO dates
today = new Date().toISOString().slice(0, 10)

// collect all the information sorted into a track/adr-id/version hierarchy
tracks = {}
fns.forEach((fn) => {
    var components = fn.split('-')
    var adrId = components[1]
    var version = components[2]
    var obj = {id: fn.substring(0, fn.length - 3), filename: fn, adrId, version}
    var prefixLines = fs.readFileSync(`standards/${fn}`, 'utf8').split('\n').slice(0, 10)
    prefixLines.forEach((line) => {
        var lhs = line.split(':', 1)[0]
        var rhs = line.slice(lhs.length + 1).trim()
        if (!rhs || keys.indexOf(lhs) == -1) return
        obj[lhs] = rhs
    })
    // var type = obj.type
    // if (type === undefined) return
    // if (types[type] === undefined) types[type] = {}
    // var tracks = types[type]
    var track = obj.track
    if (track === undefined) return
    if (tracks[track] === undefined) tracks[track] = {}
    var standards = tracks[track]
    if (standards[adrId] === undefined) standards[adrId] = {active: [], versions: []}
    standards[adrId].versions.push(obj)
    obj.isStable = obj.stabilized_at && obj.stabilized_at <= today
    obj.isObsolete = obj.obsoleted_at && obj.obsoleted_at <= today
    obj.isActive = obj.isStable && !obj.isObsolete
    if (obj.isStable) {
        standards[adrId].active.push(version)
    }
})

function readPrefixLines(fn) {
    var lines = []
    if (fs.existsSync(fn)) {
        lines = fs.readFileSync(fn, 'utf8').split('\n')
        var tableIdx = lines.findIndex((line) => line.trim().startsWith('|'))
        if (tableIdx >= 0) {
            lines.splice(tableIdx)
        }
    } else console.log(`WARNING: file ${fn} not found`)
    return lines
}

// walk down the hierarchy, building adr overview pages, track overview pages, and total overview page
// as well as the new sidebar
var lines = readPrefixLines('standards/standards/overview.md')
lines.push('| Standard  | Track  | Description  | Active Versions  |')
lines.push('| --------- | ------ | ------------ | ---------------- |')
Object.entries(tracks).forEach((trackEntry) => {
    var track = trackEntry[0]
    var trackItem = {
        type: 'category',
        label: track,
        link: {
            type: 'doc',
            id: `${track.toLowerCase()}/index`,
        },
        items: [],
    }
    sidebarItems.push(trackItem)
    var tlines = readPrefixLines(`standards/${track.toLowerCase()}/index.md`)
    tlines.push('| Standard  | Description  | Active Versions  |')
    tlines.push('| --------- | ------------ | ---------------- |')
    Object.entries(trackEntry[1]).forEach((standardEntry) => {
        var active = standardEntry[1].active
        var versions = standardEntry[1].versions
        var description = versions[versions.length - 1].title
        var icon = active.length ? '🟢' : '🟠'
        var adrId = standardEntry[0]
        var standardItem = {
            type: 'category',
            label: `${icon} scs-${adrId}`,
            link: {
                type: 'doc',
                id: `${track.toLowerCase()}/scs-${adrId}`,
            },
            items: [
            ]
        }
        trackItem.items.push(standardItem)
        var slines = readPrefixLines(`standards/${track.toLowerCase()}/scs-${adrId}.md`)
        slines.push('| Version  | Type  | State   | stabilized | obsoleted |')
        slines.push('| -------- | ----- | ------- | ---------- | --------- |')
        var link = `[${icon} scs-${adrId}](/standards/${track.toLowerCase()}/scs-${adrId})`
        var activeLinks = versions.filter((v) => v.isActive).map((v) => `[${v.version}](/standards/${v.id})`)
        lines.push(`| ${link} | ${track}  | ${description}  | ${activeLinks.join(', ')} |`)
        tlines.push(`| ${link}  | ${description}  | ${activeLinks.join(', ')} |`)
        standardEntry[1].versions.forEach((obj) => {
            var icon = obj.isActive ? '🟢' : '🟠'
            var versionItem = {
                type: 'doc',
                label: obj.version.toUpperCase(),
                id: obj.id,
            }
            standardItem.items.push(versionItem)
            slines.push(`| [${icon} scs-${adrId}-${obj.version}](/standards/${obj.id})  | ${obj.type}  | ${obj.status || obj.state}  | ${obj.stabilized_at || '-'}  | ${obj.obsoleted_at || '-'} |`)
        })
        fs.writeFileSync(`standards/${track.toLowerCase()}/scs-${adrId}.md`, slines.join('\n'), 'utf8')
    })
    fs.writeFileSync(`standards/${track.toLowerCase()}/index.md`, tlines.join('\n'), 'utf8')
})
fs.writeFileSync(`standards/standards/overview.md`, lines.join('\n'), 'utf8')

var newSidebars = `// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = ${JSON.stringify(sidebars, null, '  ')}

module.exports = sidebars
`

fs.writeFileSync('./sidebarsStandards.js', newSidebars, 'utf8')
