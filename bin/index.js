const fs = require('fs').promises
const mkdir = require('mkdirp')
const {readFromFile} = require('./helpers/readFromFile')
const defaultConfig = require('./config/config.default')
const {getBadge} = require('./helpers/getBadge.js')
const {writeToFile} = require('./helpers/writeToFile.js')

const init = async function () {
    const {coverageSummaryPath, output} = defaultConfig
    const fileSummary = await readFromFile(coverageSummaryPath)
    const coverageSummary = JSON.parse(fileSummary)
    const totalCoverageSummary = coverageSummary.total

    // Clear badges folder
    await fs.rm(output.dir, {recursive: true})
    console.log('Badges folder cleared correctly.')

    if (!totalCoverageSummary)
        throw new Error('Total coverage summary not found')

    // Calculate coverage average
    const averageCoverage = Object.values(totalCoverageSummary)
        .reduce((totalCoverage, summaryCoverage) => totalCoverage += summaryCoverage.pct, 0) / 4
    totalCoverageSummary.average = { pct: averageCoverage }

    // Generate badge for each summary
    for (const summary of Object.entries(totalCoverageSummary)) {
        const summaryKey = summary[0]
        const summaryReport = summary[1]
        const coverageLabel = summaryKey === 'average' ? 'Coverage' : `Coverage: ${summaryKey}`

        await getBadge(coverageLabel, summaryReport.pct, async (result) => {
            // Create badges dir if doesn't exists
            await mkdir(output.dir)
            await writeToFile(`${output.dir}/${summaryKey}-badge.svg`, result)
        })
    }

    console.log(`Badges correctly generated in folder ${output.dir}.`)
}

init()
