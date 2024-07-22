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
    // sort in descending order, so we get the MAX_OLD most recent obsolete versions
    scope.versions.sort((a, b) => b.version.localeCompare(a.version));
    scope.versions.forEach((version) => {
        version.isStable = version.stabilized_at !== undefined && version.stabilized_at <= today
        version.isObsolete = version.deprecated_at !== undefined && version.deprecated_at < today
        version.isEffective = version.isStable && !version.isObsolete
        version.isPreview = version.stabilized_at === undefined || today < version.stabilized_at
        if (!version.isEffective && !version.isPreview) {
            numOld += 1
            if (numOld > MAX_OLD) return
        }
        version.state = (
            version.stabilized_at === undefined ? 'Draft' :
            version.isEffective ? 'Effective' :
            version.isObsolete ? 'Deprecated' :
            'Stable'
        )
        if (version.standards === undefined) return
        versionsShown[version.version] = version
        version.standards.forEach((standard) => {
            const components = standard.url.split('/')
            const filename = components[components.length - 1]
            // first, sensible (but not pretty) defaults
            var key = standard.url
            var name = standard.name
            var ver = '✓'
            var url = standard.url
            if (filename.startsWith('scs-') && filename.endsWith('.md')) {
                // special case for internal standards
                const components2 = filename.split('-')
                key = `scs-${components2[1]}`
                name = `${key}: ${name}`
                ver = components2[2]
                url = `/standards/${filename.substring(0, filename.length - 3)}`
            } else {
                // special case mainly for OpenStack Powered Compute, but anything ending in 'vXYZ'
                const components2 = name.split(' ')
                const v = components2.splice(components2.length - 1)
                if (v[0].startsWith('v')) {
                    key = components2.join(' ')
                    name = key
                    ver = v[0]
                }
            }
            if (matrix[key] === undefined) {
                matrix[key] = {name, columns: {}}
            }
            matrix[key].columns[version.version] = {
                version: ver,
                url,
                parameters: standard.parameters,
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
    lines.push('| Deprecated at      | ' + columns.map((c) => versionsShown[c].deprecated_at || '').join('  | ') + '  |')
    // md doesn't allow intermediate header rows
    // lines.push('| :-- | ' + columns.map(() => ':--').join(' | ') + ' |')
    lines.push('| **Standards**      | ' + columns.map((c) => ' '.repeat(c.length)).join('  | ') + '  |')
    // md doesn't allow intermediate header rows
    // lines.push('| :-- | ' + columns.map(() => ':--').join(' | ') + ' |')
    rows.forEach((row) => {
        lines.push(`| ${row.name}  | ` + columns.map((c) => row.columns[c]).map((col) => {
            if (col === undefined) {
                // this version of the cert does not include this standard
                return ''
            }
            let params = Object.entries(col.parameters || {}).map((entry) =>
                entry[1].startsWith('https://') ? `[${entry[0]}](${entry[1]})` : `${entry[0]}=${entry[1]}`
            ).join(', ')
            if (params.length) {
                params = `(${params})`
            }
            return `[${col.version}](${col.url}) ${params}`
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
