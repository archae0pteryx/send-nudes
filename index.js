const _ = require('lodash')
const { week } = require('./date')
const ALPHABET = require('./alphabet')
// daysOfTheWeek = letter[day][week]
// _.each(ALPHABET, x => console.log(x.letter))

const phrase = 'this is a long ass phrase'
const explodePhrase = phrase.split('')

// for (i = 0; i < explodePhrase.length; i++) {
//   let phraseObject = []
//   let spaced = false
//   for (j = 0; j < ALPHABET.length; j++) {
//     if (ALPHABET[j].letter === explodePhrase[i].toUpperCase()) {
//       phraseObject.push(ALPHABET[j])
//     } else if (phraseObject[i - 1].letter !== 'space' && explodePhrase[i] === ' ') {
//       phraseObject.push({ letter: 'space', vec: [] })
//     }
//   }
//   console.log(phraseObject)
// }


