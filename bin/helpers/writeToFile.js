const fs = require('fs').promises

const writeToFile = async function (filePath, content) {
    try {
        fs.writeFile(filePath, content, { encoding: 'utf8' })
    } catch (error) {
        throw error
    }
}

module.exports = {
    writeToFile
}