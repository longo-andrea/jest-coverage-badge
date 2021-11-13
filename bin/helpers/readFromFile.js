const promises = require('fs').promises

const readFromFile = function (filePath) {
    if (!filePath)
        throw new Error('You must provide the file path')

    return promises.readFile(filePath, 'utf8')
}

module.exports = {
    readFromFile,
}
