const fs = require('fs')
const YAML = require('yaml')

// how many outdated versions of any scope to include
const MAX_OLD = 1

const filenames = fs
    .readdirSync('standards/')
    .filter((fn) => fn.startsWith('scs-') && fn.endsWith('.yaml'))

const scopes = filenames.map((filename) => {
    return {
        ...YAML.parseDocument(fs.readFileSync(`standards/${filename}`, 'utf8')).toJSON(),
        filename,
        id: filename.substring(0, filename.length - 5),
    }
})

const today = new Date().toISOString().slice(0, 10)

const sidebarItems = scopes.map((scope) => {
    const matrix = {}
    const versionsShown = {}
    var numOld = 0
    var modules = {}
    scope.modules.forEach((module) => {
        modules[module.id] = module
        module.prettyName = module.id.startsWith('scs-') ? `${module.id}: ${module.name}` : module.name
    })
    scope.timeline.sort((a, b) => b.date.localeCompare(a.date))
    const current = scope.timeline.filter((entry) => entry.date <= today)
    const lookup = current.length ? current[0].versions : {}
    // sort in descending order, so we get the MAX_OLD most recent obsolete versions
    scope.versions.sort((a, b) => b.version.localeCompare(a.version));
    scope.versions.forEach((version) => {
        version.state = lookup[version.version] || 'deprecated'
        version.isStable = version.stabilized_at !== undefined && version.stabilized_at <= today
        version.isEffective = version.state == 'effective'
        if (['warn', 'effective', 'draft'].indexOf(version.state) == -1) {
            numOld += 1
            if (numOld > MAX_OLD) return
        }
        if (version.include === undefined) return
        versionsShown[version.version] = version
        version.include.forEach((include) => {
            if (include.ref === undefined) {
                include = {ref: include, parameters: {}}
            }
            const module = modules[include.ref]
            if (matrix[module.id] === undefined) {
                matrix[module.id] = {
                    name: module.prettyName,
                    columns: {},
                    url: module.url,
                }
            }
            matrix[module.id].columns[version.version] = {
                parameters: include.parameters,
            }
        })
    })

    const rows = Object.values(matrix)
    const columns = Object.keys(versionsShown)
    rows.sort((a, b) => a.name.localeCompare(b.name));
    columns.sort((a, b) => a.localeCompare(b));

    lines = [`# ${scope.name}

Note that the state _Stable_ is shown here if _stabilized at_ is in the future, whereas _Effective_ is shown here if _stabilized at_ is in the past and _deprecated at_ is unset or in the future.
`]
    lines.push('| Scope versions ->  | ' + columns.join('  | ') + '  |')
    lines.push('| :-- | ' + columns.map(() => ':--').join(' | ') + ' |')
    lines.push('| State              | ' + columns.map((c) => versionsShown[c].state).join('  | ') + '  |')
    lines.push('| Stabilized at      | ' + columns.map((c) => versionsShown[c].stabilized_at || '').join('  | ') + '  |')
    // lines.push('| Deprecated at      | ' + columns.map((c) => versionsShown[c].deprecated_at || '').join('  | ') + '  |')
    // md doesn't allow intermediate header rows
    // lines.push('| :-- | ' + columns.map(() => ':--').join(' | ') + ' |')
    lines.push('| **Modules**        | ' + columns.map((c) => ' '.repeat(c.length)).join('  | ') + '  |')
    // md doesn't allow intermediate header rows
    // lines.push('| :-- | ' + columns.map(() => ':--').join(' | ') + ' |')
    rows.forEach((row) => {
        lines.push(`| [${row.name}](${row.url})  | ` + columns.map((c) => row.columns[c]).map((col) => {
            if (col === undefined) {
                // this version of the cert does not include this standard
                return ''
            }
            let params = Object.entries(col.parameters || {}).map((entry) =>
                entry[1].startsWith('https://') ? `[${entry[0]}](${entry[1]})` : `${entry[0]}=${entry[1]}`
            ).join(', ')
            if (params.length) {
                params = ` (${params})`
            }
            return `X${params}`
        }).join('  | ') + '  |')
    })
    lines.push('')  // file should end with a single newline character
    fs.writeFileSync(`standards/${scope.id}.md`, lines.join('\n'), 'utf8')

    const state = columns.filter((c) => versionsShown[c].isEffective).length ? '📜' : '✏️'
    return {
        type: 'doc',
        label: scope.name,
        id: scope.id,
    }
})

var newSidebars = `module.exports = ${JSON.stringify(sidebarItems, null, '  ')}`
fs.writeFileSync('./sidebarsCertificationItems.js', newSidebars, 'utf8')
