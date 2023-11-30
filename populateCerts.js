const fs = require('fs')
const YAML = require('yaml')

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
    scope.versions.forEach((version) => {
        version.isStable = version.stabilized_at !== undefined && version.stabilized_at <= today
        version.isObsolete = version.obsoleted_at !== undefined && version.obsoleted_at <= today
        version.isActive = version.isStable && !version.isObsolete
        version.isPreview = version.stabilized_at === undefined || today < version.stabilized_at
        if (!version.isActive && !version.isPreview) return
        version.state = version.isActive ? '📜' : '✏️'
        if (version.standards === undefined) return
        versionsShown[version.version] = version
        version.standards.forEach((standard) => {
            const components = standard.url.split('/')
            const filename = components[components.length - 1]
            var key = standard.url
            var name = standard.name
            var ver = null
            var url = standard.url
            if (filename.startsWith('scs-') && filename.endsWith('.md')) {
                const components2 = filename.split('-')
                key = `scs-${components2[1]}`
                name = `${key}: ${name}`
                ver = components2[2]
                url = `standards/${filename.substring(0, filename.length - 3)}`
            } else {
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
            }
        })
    })
    
    const values = Object.values(matrix)
    const columns = Object.keys(versionsShown)
    values.sort((a, b) => a.name.localeCompare(b.name));
    columns.sort((a, b) => a.localeCompare(b));

    lines = [`# ${scope.name}\n`]
    lines.push('| Scope versions ->  | ' + columns.join('  | ') + '  |')
    lines.push('| ------------------ | ' + columns.map((c) => '-'.repeat(c.length)).join('- | ') + '- |')
    lines.push('| State              | ' + columns.map((c) => versionsShown[c].state).join('  | ') + '  |')
    lines.push('| Stabilized at      | ' + columns.map((c) => versionsShown[c].stabilized_at || '').join('  | ') + '  |')
    lines.push('| Obsoleted at       | ' + columns.map((c) => versionsShown[c].obsoleted_at || '').join('  | ') + '  |')
    lines.push('| ------------------ | ' + columns.map((c) => '-'.repeat(c.length)).join('- | ') + '- |')
    lines.push('| Standards          | ' + columns.map((c) => ' '.repeat(c.length)).join('  | ') + '  |')
    lines.push('| ------------------ | ' + columns.map((c) => '-'.repeat(c.length)).join('- | ') + '- |')
    values.forEach((row) => {
        lines.push(`| ${row.name}  | ` + columns.map((c) => row.columns[c]).map((col) => {
            if (col === undefined) {
                // this version of the cert does not include this standard
                return ''
            }
            return `[${col.version}](${col.url})`
        }).join('  | ') + '  |')
    })
    lines.push('')  // file should end with a single newline character
    fs.writeFileSync(`standards/${scope.id}.md`, lines.join('\n'), 'utf8')

    const state = columns.filter((c) => versionsShown[c].isActive).length ? '📜' : '✏️'
    return {
        type: 'doc',
        label: `${state} ${scope.name}`,
        id: scope.id,
    }

    console.log(matrix)
})

var newSidebars = `module.exports = ${JSON.stringify(sidebarItems, null, '  ')}`
fs.writeFileSync('./sidebarsCertificationItems.js', newSidebars, 'utf8')
