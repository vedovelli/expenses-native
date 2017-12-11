
import database from 'firebase/database' // /src/service/firebase/database.js
import map from 'lodash/map'
import reverse from 'lodash/reverse'
import uniq from 'lodash/uniq'

/**
* Get the flat list from Firebase
*/
const list = callback => {
  database.ref('expenses').limitToLast(30).on('value', response => {
    if (response.val() != null) {
      const expenses = reverse(
          map(response.val(), (expense, index) => {
          expense.id = index
          expense.key = index
          return expense
        })
      )
      callback(expenses)
    }
  })
}

/**
* Get the flat list from Firebase
* and morph it into sections
*/
const listWithSections = callback => {
  list(expenses => {
    /**
    * Morph the list into sections
    */
    const allDates = expenses.map(expense => expense.date)
    const uniqDates = uniq(allDates)
    const sortedDateList = uniqDates.sort(_sortDates)
    const finalList = sortedDateList.map(date => _getItemsForDate(expenses, date))

    callback(finalList)
  })
}

const save = (expense) => {
  return Promise.resolve({
    key: database.ref('expenses').push(expense).key
  })
}

const _sortDates = (a, b) => {
  a = a.split('/').reverse().join('')
  b = b.split('/').reverse().join('')
  return a > b ? -1 : 1
}

const _getItemsForDate = (expenses, date) => {
  const data = expenses.filter(expense => expense.date === date)
  const total = data.reduce((a, c) => a + parseFloat(c.amount, 10), 0).toFixed(2)
  return { title: date, data, total }
}

export default {
  list,
  listWithSections,
  save
}
