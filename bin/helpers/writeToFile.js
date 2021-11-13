const fs = require('fs').promises

const writeToFile = function (filePath, content) {
    fs.writeFile(filePath, content, {encoding: 'utf8'})
}

module.exports = {
    writeToFile,
}
