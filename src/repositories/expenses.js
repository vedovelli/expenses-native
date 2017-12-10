
import map from 'lodash/map'
import reverse from 'lodash/reverse'
import database from 'firebase/database' // /src/service/firebase/database.js

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

export default {
  list
}
