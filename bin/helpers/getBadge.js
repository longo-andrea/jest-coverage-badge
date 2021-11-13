const { get } = require('https')

const getColor = function () {
    return 'red'
}

const getBadgeUrl = function (label, value) {
    const color = getColor()
    return `https://img.shields.io/static/v1?label=${label}&message=${value}&color=${color}`
}

const getBadge = async function(label, value, callbackFn) {
    const url = getBadgeUrl(label, value)

    get(url, result => {
        let file = ''

        result.on('data', chunck => file += chunck)
        result.on('end', () => callbackFn(file))
    }).on('error', error => { throw error });
}

module.exports = {
    getBadge
}