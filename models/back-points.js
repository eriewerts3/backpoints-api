const entries = [];
let Chance = require('chance');
let chance = new Chance();

module.exports.createNewEntry = function() {
    entries.push({
        rest: chance.integer({min: 1000, max: 2500,}),
        healthy:chance.integer(),
        dailyActivity:chance.integer(),
        steps:chance.integer(),
        day: new Date(),
    });
}

module.exports.getEntries = function () {
    entries.forEach(e => {
    //TODO loop through entries and add 3day average before responding
    //TODO add tests to validate

     e.threeDayAverage = 123
    })


    return entries;
}