const fs = require('fs')

const intro = `# Overview

Standards are the core deliverable of SCS. By standardizing the open source software components of a cloud computing stack, their versions, how they are to be configured, deployed and utilized, SCS guarantees the reproducibility of a certain behavior of this technology.

SCS standards are discussed, developed and maintained in the community by the corresponding teams (see Track in the table below), which naturally include existing users of SCS.
`
const trackIntros = {
    'Global': 'This track encompasses the foundational standards that guide the overall structure, documentation, and general topics related to the Sovereign Cloud Stack. It serves as the core framework, ensuring consistency, clarity, and comprehensibility across all aspects of the cloud stack, fostering an environment where information is easily accessible and understood.',
    'IaaS': 'The IaaS Layer Standards track focuses on the protocols, guidelines, and specifications that govern the infrastructure as a service layer. This encompasses standards for virtual machines, storage, networking, and other foundational resources, ensuring seamless, efficient, and secure operation, interoperability, and management of the underlying cloud infrastructure.',
    'KaaS': 'Standards in this track are concerned with Kubernetes as a Service layer, outlining norms and best practices for deploying, managing, and operating Kubernetes clusters. These standards aim to ensure that the orchestration of containers is streamlined, secure, and compatible across various cloud environments and platforms.',
    'IAM': 'This track revolves around Identity and Access Management (IAM) standards, providing guidelines for ensuring secure and efficient user authentication, authorization, and administration. It addresses issues related to user identity, permissions, roles, and policies, aiming to safeguard and streamline access to cloud resources and services.',
    'Ops': 'Operational Tooling Standards cover the protocols and guidelines associated with tools and utilities used for monitoring, management, and maintenance of the cloud environment. This includes standards for status pages, alerts, logs, and other operational tools, aiming to optimize the reliability, performance, and security of cloud services and resources.',
}

var filenames = fs
    .readdirSync('standards/')
    .filter((fn) => fn.startsWith('scs-') && fn.endsWith('.md') && !fn.startsWith('scs-X'))

keys = ['title', 'type', 'status', 'track', 'stabilized_at', 'obsoleted_at', 'replaces', 'authors', 'state']

// use the ISO string, because so do the standard documents, and we can use string comparison with ISO dates
today = new Date().toISOString().slice(0, 10)

// collect all the information sorted into a track/adr-id/version hierarchy
tracks = {}
filenames.forEach((fn) => {
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
    if (standards[adrId] === undefined) standards[adrId] = {versions: []}
    standards[adrId].versions.push(obj)
    obj.isStable = obj.stabilized_at && obj.stabilized_at <= today
    obj.isObsolete = obj.obsoleted_at && obj.obsoleted_at <= today
    obj.isActive = obj.isStable && !obj.isObsolete
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
sidebarItems = []
var lines = readPrefixLines('standards/standards/overview.md')
if (!lines.length) lines.push(intro)
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
    if (!tlines.length) {
        tlines.push(`# ${track} Standards

${trackIntros[track]}
`)
    }
    tlines.push('| Standard  | Description  | Active Versions  |')
    tlines.push('| --------- | ------------ | ---------------- |')
    Object.entries(trackEntry[1]).forEach((standardEntry) => {
        var versions = standardEntry[1].versions
        var activeLinks = versions.filter((v) => v.isActive).map((v) => `[${v.version}](/standards/${v.id})`)
        var description = versions[versions.length - 1].title
        var icon = activeLinks.length ? '🟢' : '🟠'
        var adrId = standardEntry[0]
        var standardItem = {
            type: 'category',
            label: `${icon} scs-${adrId}`,
            link: {
                type: 'doc',
                id: `${track.toLowerCase()}/scs-${adrId}`,
            },
            items: [],
        }
        trackItem.items.push(standardItem)
        var slines = readPrefixLines(`standards/${track.toLowerCase()}/scs-${adrId}.md`)
        if (!slines.length) slines.push(`# scs-${adrId}: ${description}\n`)
        slines.push('| Version  | Type  | State   | stabilized | obsoleted |')
        slines.push('| -------- | ----- | ------- | ---------- | --------- |')
        var link = `[${icon} scs-${adrId}](/standards/${track.toLowerCase()}/scs-${adrId})`
        lines.push(`| ${link}  | ${track}  | ${description}  | ${activeLinks.join(', ')}  |`)
        tlines.push(`| ${link}  | ${description}  | ${activeLinks.join(', ')}  |`)
        standardEntry[1].versions.forEach((obj) => {
            var icon = obj.isActive ? '🟢' : '🟠'
            var versionItem = {
                type: 'doc',
                label: obj.version.toUpperCase(),
                id: obj.id,
            }
            standardItem.items.push(versionItem)
            slines.push(`| [${icon} scs-${adrId}-${obj.version}](/standards/${obj.id})  | ${obj.type}  | ${obj.status || obj.state}  | ${obj.stabilized_at || '-'}  | ${obj.obsoleted_at || '-'}  |`)
        })
        slines.push('')  // file should end with a single newline character
        fs.writeFileSync(`standards/${track.toLowerCase()}/scs-${adrId}.md`, slines.join('\n'), 'utf8')
    })
    tlines.push('')  // file should end with a single newline character
    fs.writeFileSync(`standards/${track.toLowerCase()}/index.md`, tlines.join('\n'), 'utf8')
})
lines.push('')  // file should end with a single newline character
fs.writeFileSync(`standards/standards/overview.md`, lines.join('\n'), 'utf8')

var newSidebars = `module.exports = ${JSON.stringify(sidebarItems, null, '  ')}`
fs.writeFileSync('./sidebarsStandardsItems.js', newSidebars, 'utf8')
