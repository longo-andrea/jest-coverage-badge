const { readFromFile } = require('./helpers/readFromFile')
const getConfig = require('./config/index.js')
const { getBadge } = require('./helpers/getBadge.js')
const { writeToFile } = require('./helpers/writeToFile.js')
const mkdir = require("mkdirp");


const init = async function() {
    const config = getConfig()

    try {
        const fileSummary = await readFromFile(config.coveragePath)
        const coverageSummary = JSON.parse(fileSummary)
        const totalCoverageSummary = coverageSummary.total

        getBadge('ciao', '10', function (result) {
            mkdir('./badges').then(() => {
                writeToFile('./badges/badge.svg', result)
            })
        });

        if (!totalCoverageSummary)
            throw new Error('Total coverage summary not found')
    } catch (error) {
        throw error
    }
}

init()

