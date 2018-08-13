const moment = require('moment')

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
const week = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]


function makeDatesForYear(today) {
  let yearOfDaysArr = []
  let count = moment().day()
  for (i = 0; i <= 10; i++) {
    let dateObj = {}
    if (count === 7) {
      count = 0
    }
    dateObj.day = week[count]
    if (count === 0) {
      dateObj.date = today
      yearOfDaysArr.push(dateObj)
      count++
    } else {
      dateObj.date = moment().add(i, 'days').format('MM_DD_YYYY')
      yearOfDaysArr.push(dateObj)
      count++
    }
  }
  return yearOfDaysArr
}



module.exports = {
  makeDatesForYear
}
