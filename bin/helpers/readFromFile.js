const promises = require('fs').promises

const readFromFile = async function (filePath, callback) {
    if (!filePath)
        throw new Error('You must provide the file path')

    return await promises.readFile(filePath, 'utf8');
}

module.exports = {
    readFromFile
}