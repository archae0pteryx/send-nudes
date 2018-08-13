const CronJob = require('cron').CronJob
const { exec } = require('child_process')
const _ = require('lodash')
const moment = require('moment')
const { makeDatesForYear } = require('./date')
const ALPHABET = require('./alphabet')
// daysOfTheWeek = letter[day][week]
// _.each(ALPHABET, x => console.log(x.letter))

const phrase = 'this is a long ass phrase'
const explodePhrase = phrase.split('')

// This might be super unecessary
const arrayOfDates = makeDatesForYear()

const job = new CronJob('* * * 1 * * *', () => run(), null, true,'America/Los_Angeles')

function main () {
  // wait for monday
  if (moment().day() !== 1) {
    // go to sleep for 24h
    // TODO: im sure there's a better way to do this!
    setTimeout(_ => {
      main()
    }, 86400000)
  }
  // It is Monday! GO GO GO!
  job.start()
}

// make 20 commits to gh
function run () {
  // loop through each letter of phrase
  for (i = 0; i <= explodePhrase.length; i++) {
    if (explodePhrase[i] === ALPHABET.buffer) {
      // push buffer commit
    } else {
      // push letter for day
    }
  }

}


function makeCommit () {

}

console.log(explodePhrase)


