const {get} = require('https')

const getColor = function (value) {
    if (value <= 80)
        return 'red'
    if (value <= 90)
        return 'yellow'
    if (value > 90)
        return 'green'

    return 'inactive'
}

const getBadgeUrl = function (label, value) {
    const color = getColor(value)
    return `https://img.shields.io/static/v1?label=${label}&message=${value}&color=${color}`
}

const getBadge = function (label, value, callbackFunction) {
    const url = getBadgeUrl(label, value)

    get(url, (result) => {
        let file = ''

        result.on('data', (chunck) => file += chunck)
        result.on('end', () => callbackFunction(file))
    }).on('error', (error) => { throw error })
}

module.exports = {
    getBadge,
}
