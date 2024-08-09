const fs = require('fs')
const YAML = require('yaml')

const intro = `# Overview

Standards are the core deliverable of SCS. By standardizing the open source software components of a cloud computing stack, their versions, how they are to be configured, deployed and utilized, SCS guarantees the reproducibility of a certain behavior of this technology.

SCS standards are discussed, developed and maintained in the community by the corresponding teams (see Track in the table below), which naturally include existing users of SCS.`
const trackIntros = {
  Global:
    'This track encompasses the foundational standards that guide the overall structure, documentation, and general topics related to the Sovereign Cloud Stack. It serves as the core framework, ensuring consistency, clarity, and comprehensibility across all aspects of the cloud stack, fostering an environment where information is easily accessible and understood.',
  IaaS: 'The IaaS Layer Standards track focuses on the protocols, guidelines, and specifications that govern the infrastructure as a service layer. This encompasses standards for virtual machines, storage, networking, and other foundational resources, ensuring seamless, efficient, and secure operation, interoperability, and management of the underlying cloud infrastructure.',
  KaaS: 'Standards in this track are concerned with Kubernetes as a Service layer, outlining norms and best practices for deploying, managing, and operating Kubernetes clusters. These standards aim to ensure that the orchestration of containers is streamlined, secure, and compatible across various cloud environments and platforms.',
  IAM: 'This track revolves around Identity and Access Management (IAM) standards, providing guidelines for ensuring secure and efficient user authentication, authorization, and administration. It addresses issues related to user identity, permissions, roles, and policies, aiming to safeguard and streamline access to cloud resources and services.',
  Ops: 'Operational Tooling Standards cover the protocols and guidelines associated with tools and utilities used for monitoring, management, and maintenance of the cloud environment. This includes standards for status pages, alerts, logs, and other operational tools, aiming to optimize the reliability, performance, and security of cloud services and resources.'
}
const headerLegend =
  '*Legend to the column headings and entries:\nDocument states: Draft, Effective, Deprecated (and no longer effective).\nEntries in the effective column marked with an * are stable right now but turn to effective documents in the near future.\nEntries in the effective column marked with a † will turn deprecated in the near future.'

// convert the string into an array of lines
const legendLines = headerLegend.split('\n')

// extract the first line separately
const firstLine = legendLines.shift()

// render as a bullet-point list
const legendWithBullets = `
<p>${firstLine}</p>
<ul>
  ${legendLines.map((line) => `<li>${line}</li>`).join('')}
</ul>
`

const reactHighlightTableCellBackground = `
import { useEffect } from 'react';
export const TableCellStyleApplier = () => {
    // apply background color based on cell index
    const colorMapping = {
      3: '#FBFDE2', // draft
      4: '#E2EAFD', // effective
      5: '#FDE2E2' // deprecated
    };
  

    useEffect(() => {
        const divElement = document.querySelector('#color-table-cells');
        if (divElement) {
          // the next sibling of that element should be our table
          const tableElement = divElement.nextElementSibling;
          if (tableElement && tableElement.tagName.toLowerCase() === 'table') {
            tableElement.querySelectorAll('tbody tr').forEach((row) => {
              row.querySelectorAll('td').forEach((cell, index) => {
                // apply background for all cells that have more content than '-'
                if (colorMapping[index] && cell.textContent.trim() !== '-') {
                  cell.style.backgroundColor = colorMapping[index];
                }
              });
            });
          }
        }
      }, []);
  
    return null;
  };

  <TableCellStyleApplier />
  `

var filenames = fs
  .readdirSync('standards/')
  .filter(
    (fn) =>
      fn.startsWith('scs-') && fn.endsWith('.md') && !fn.startsWith('scs-X')
  )

keys = [
  'title',
  'type',
  'status',
  'track',
  'stabilized_at',
  'deprecated_at',
  'replaces',
  'authors',
  'state'
]

// use the ISO string, because so do the standard documents, and we can use string comparison with ISO dates
today = new Date().toISOString().slice(0, 10)

// collect all the information sorted into a track/adr-id/version hierarchy
var tracks = {}
filenames.forEach((filename) => {
  var components = filename.split('-')
  var obj = {
    ...YAML.parseDocument(
      fs.readFileSync(`standards/${filename}`, 'utf8')
    ).toJSON(),
    filename,
    id: filename.substring(0, filename.length - 3),
    adrId: components[1],
    version: components[2],
    slug: filename.substring(12, filename.length - 3), // 12 == "scs-xxxx-vN-".length
    state: {}
  }

  obj.state.draft = obj.stabilized_at === undefined
  obj.state.deprecated =
    obj.deprecated_at !== undefined && obj.deprecated_at <= today
  obj.state.stable = !obj.state.draft && !obj.state.deprecated
  obj.state.effective = !obj.state.deprecated && !obj.state.draft
  obj.state.futureEffective = obj.state.effective && obj.stabilized_at > today
  obj.state.futureDeprecated =
    obj.state.effective &&
    obj.deprecated_at !== undefined &&
    obj.deprecated_at > today

  var track = obj.track
  if (track === undefined) return
  if (tracks[track] === undefined) tracks[track] = {}
  var standards = tracks[track]
  if (standards[obj.adrId] === undefined)
    standards[obj.adrId] = { versions: [], supplements: {} }
  if (obj.type === 'Supplement') {
    var supplements = standards[obj.adrId].supplements
    if (supplements[obj.slug] === undefined)
      supplements[obj.slug] = { versions: [], title: obj.title }
    supplements[obj.slug].versions.push(obj)
  } else {
    standards[obj.adrId].versions.push(obj)
  }
})

// function readPrefixLines(fn) {
//     var lines = []
//     if (fs.existsSync(fn)) {
//         lines = fs.readFileSync(fn, 'utf8').split('\n')
//         var tableIdx = lines.findIndex((line) => line.trim().startsWith('|'))
//         if (tableIdx >= 0) {
//             lines.splice(tableIdx)
//         }
//     } else console.log(`WARNING: file ${fn} not found`)
//     return lines
// }

function mkLinkList(versions) {
  var links = versions.map((v) => `[${v.version}](/standards/${v.id})`)
  return links.join(', ')
}

// walk down the hierarchy, building adr overview pages, track overview pages, and total overview page
// as well as the new sidebar
sidebarItems = []
var lines = []
// var lines = readPrefixLines('standards/standards/overview.mdx')
if (!lines.length)
  lines.push(`${intro}

${legendWithBullets}
${reactHighlightTableCellBackground}
`)
lines.push('<div id="color-table-cells" />') // used to find the sibling table for color encoded background
lines.push(
  '| Standard  | Track  | Description  | Draft | Effective | Deprecated* |'
)
lines.push(
  '| --------- | ------ | ------------ | ----- | --------- | ----------- |'
)
Object.entries(tracks).forEach((trackEntry) => {
  var track = trackEntry[0]
  var trackPath = `standards/${track.toLowerCase()}`
  fs.mkdirSync(trackPath, { recursive: true })
  var trackItem = {
    type: 'category',
    label: track,
    link: {
      type: 'doc',
      id: `${track.toLowerCase()}/index`
    },
    items: []
  }
  sidebarItems.push(trackItem)
  var tlines = []
  // var tlines = readPrefixLines(`standards/${track.toLowerCase()}/index.md`)
  if (!tlines.length) {
    tlines.push(`# ${track} Standards

${trackIntros[track]}

${legendWithBullets}
`)
  }

  tlines.push('| Standard  | Description  | Draft | Effective | Deprecated* |')
  tlines.push('| --------- | ------------ | ----- | --------- | ----------- |')
  Object.entries(trackEntry[1]).forEach((standardEntry) => {
    var versions = standardEntry[1].versions
    var supplements = standardEntry[1].supplements
    var ref = versions[versions.length - 1]
    var effectiveVersions = versions.filter((v) => v.state.effective)
    if (effectiveVersions.length) {
      ref = effectiveVersions[effectiveVersions.length - 1]
    }
    var adrId = standardEntry[0]
    var standardItem = {
      type: 'category',
      label: `scs-${adrId}`,
      link: {
        type: 'doc',
        id: `${track.toLowerCase()}/scs-${adrId}`
      },
      items: []
    }
    trackItem.items.push(standardItem)
    // var slines = readPrefixLines(`standards/${track.toLowerCase()}/scs-${adrId}.md`)
    var slines = []
    if (!slines.length) {
      slines.push(`# scs-${adrId}: ${ref.title}\n`)
      if (ref.description !== undefined) {
        slines.push(ref.description)
      }
    }
    slines.push('| Version  | Type  | State   | stabilized | deprecated |')
    slines.push('| -------- | ----- | ------- | ---------- | ---------- |')
    var link = `[scs-${adrId}](/standards/${track.toLowerCase()}/scs-${adrId})`
    var versionList = ['draft', 'effective', 'deprecated']
      .map(
        (column) =>
          mkLinkList(
            versions
              .filter((v) => v.state[column])
              .map((v) => {
                // for the effective column, check if there is a "future" equivalent
                // if so, this state will apply in the future and is marked with
                // an * for "futureEffective" and with a † for "futureDeprecated"
                return {
                  ...v,
                  version:
                    v.version +
                    (v.state.futureEffective
                      ? '*'
                      : v.state.futureDeprecated
                      ? '&#8224;'
                      : '')
                }
              })
          ) || '-'
      )
      .join(' | ')
    lines.push(`| ${link}  | ${track}  | ${ref.title}  | ${versionList}  |`)
    tlines.push(`| ${link}  | ${ref.title}  | ${versionList}  |`)
    versions.forEach((obj) => {
      var versionItem = {
        type: 'doc',
        label: obj.version.toUpperCase(),
        id: obj.id
      }
      standardItem.items.push(versionItem)
      slines.push(
        `| [scs-${adrId}-${obj.version}](/standards/${obj.id})  | ${
          obj.type
        }  | ${obj.status}  | ${obj.stabilized_at || '-'}  | ${
          obj.deprecated_at || '-'
        }  |`
      )
    })
    Object.values(supplements).forEach((obj) => {
      // var link = `[scs-${adrId}](/standards/${track.toLowerCase()}/scs-${adrId})`
      var title = obj.title
      var versions = obj.versions
      var versionList = ['draft', 'stable', 'effective', 'deprecated']
        .map(
          (column) => mkLinkList(versions.filter((v) => v.state[column])) || '-'
        )
        .join(' | ')
      if (title.startsWith(ref.title)) {
        title = title.substring(ref.title.length)
        if (title.startsWith(':')) title = title.substring(1)
        title = title.trimStart()
      }
      lines.push(`|   |   | Supplement: ${title}  | ${versionList} |`)
      tlines.push(`|   | Supplement: ${title}  | ${versionList} |`)
      slines.push(`\n## Supplement: ${title}\n`)
      slines.push('| Version  | State   | stabilized | deprecated |')
      slines.push('| -------- | ------- | ---------- | ---------- |')
      versions.forEach((obj) => {
        var versionItem = {
          type: 'doc',
          label: obj.version.toUpperCase(),
          id: obj.id
        }
        standardItem.items.push(versionItem)
        slines.push(
          `| [${obj.version}](/standards/${obj.id})  | ${obj.status}  | ${
            obj.stabilized_at || '-'
          }  | ${obj.deprecated_at || '-'}  |`
        )
      })
    })
    slines.push('') // file should end with a single newline character
    fs.writeFileSync(`${trackPath}/scs-${adrId}.md`, slines.join('\n'), 'utf8')
  })
  tlines.push('') // file should end with a single newline character
  fs.writeFileSync(`${trackPath}/index.md`, tlines.join('\n'), 'utf8')
})
lines.push('') // file should end with a single newline character
fs.writeFileSync(`standards/standards/overview.mdx`, lines.join('\n'), 'utf8')

var newSidebars = `module.exports = ${JSON.stringify(sidebarItems, null, '  ')}`
fs.writeFileSync('./sidebarsStandardsItems.js', newSidebars, 'utf8')
