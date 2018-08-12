const d = new Date()

const week = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]

const today = d.getDay()
const thisMonth = d.getMonth()
const indexWeek = 0

function makeDatesForYear() {
  const yearOfDays = []
  for (i = 1; i <= 365; i++) {
    
  }
  return yearOfDays
}

module.exports = {
  makeDatesForYear
}
