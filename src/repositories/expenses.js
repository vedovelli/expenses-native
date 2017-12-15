
import database from 'firebase/database' // /src/service/firebase/database.js
import map from 'lodash/map'
import reverse from 'lodash/reverse'
import uniq from 'lodash/uniq'

/**
* Get the flat list from Firebase
*/
const list = callback => {
  /**
  * Realtime database we work with
  * event listeners to get data as soon
  * as the data is available in the database.
  */
  database.ref('expenses').limitToLast(30).on('value', response => {
    if (response.val() != null) {
      /**
      * List of expenses will
      * come ordered from the oldest
      * to the newest. We just reverse it.
      */
      const expenses = reverse(
        /**
        * Here we include two required
        * pieces of data. id is required
        * to remove expense later on and key is
        * required for the loop to work in the view.
        */
        map(response.val(), (expense, index) => {
          expense.id = index
          expense.key = index
          return expense
        })
      )
      /**
      * Firebase won't return a Promise. It is
      * instead callback based. So we pass a callback
      * from thecomponent in order to pass the data back.
      * whenever it is ready Here we just call it passing the data.
      */
      callback(expenses)
    }
  })
}

/**
* Get the flat list from Firebase
* and morph it into sections
*/
const listWithSections = callback => {
  /**
  * Use the methods list in this same
  * repository in order to get the flat list.
  */
  list(expenses => {
    /**
    * Morph the list into sections
    */
    const allDates = expenses.map(expense => expense.date)
    const uniqDates = uniq(allDates)
    const sortedDateList = uniqDates.sort(_sortDates)
    const finalList = sortedDateList.map(date => _getItemsForDate(expenses, date))

    /**
    * Firebase won't return a Promise. It is
    * instead callback based. So we pass a callback
    * from thecomponent in order to pass the data back.
    * whenever it is ready Here we just call it passing the data.
    */
    callback(finalList)
  })
}

const save = expense => {
  return Promise.resolve({
    key: database.ref('expenses').push(expense).key
  })
}

const toggleArchived = expense => {
  expense.archived = !expense.archived
  database.ref(`expenses/${expense.id}`).update(expense)
}

const remove = expense => {
  database.ref(`expenses/${expense.id}`).remove()
}

const _sortDates = (a, b) => {
  a = a.split('/').reverse().join('')
  b = b.split('/').reverse().join('')
  return a > b ? -1 : 1
}

const _getItemsForDate = (expenses, date) => {
  const data = expenses.filter(expense => expense.date === date)
  const total = data.reduce((acc, { amount }) => {
    const sanitizedAmount = amount.replace(',', '.')
    return acc + parseFloat(sanitizedAmount, 10)
  }, 0).toFixed(2)
  return { title: date, data, total }
}

export default {
  list,
  save,
  remove,
  toggleArchived,
  listWithSections
}
