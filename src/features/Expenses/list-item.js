import React, { PureComponent } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import Swipeout from 'react-native-swipeout'
import expenseRepository from 'repositories/expenses' // /src/respositories/expenses.js
import { formatCurrency } from 'util/currency'

export default class Expense extends PureComponent {
  confirmDelete(expense) {
    Alert.alert(
      'Tem certeza?',
      `A despesa ${expense.description} será removida.`,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Sim', onPress: () => expenseRepository.remove(expense)}
      ]
    )
  }
  getSwipeButtons (expense) {
    return [{
      text: expense.archived ? 'Ativar' : 'Arquivar',
      backgroundColor: expense.archived ? 'green' : '#209AD1',
      onPress: () => expenseRepository.toggleArchived(expense)
    }, {
      text: 'Delete',
      backgroundColor: '#c00000',
      onPress: () => this.confirmDelete(expense)
    }]
  }
  getStyles ({ archived }) {
    return StyleSheet.create({
      itemContainer: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#f4f4f4',
        flex: 1,
        flexDirection: 'row',
      },
      itemLeft: {
        height: 44,
        padding: 10,
        fontSize: 16,
        flex: 1,
        color: archived ? '#ccc' : null,
        textDecorationLine: archived ? 'line-through' : null,
        textDecorationStyle: archived ? 'solid' : null,
      },
      itemRight: {
        height: 44,
        padding: 10,
        fontSize: 16,
        textAlign: 'right',
        flex: 1,
        color: archived ? '#ccc' : null,
        textDecorationLine: archived ? 'line-through' : null,
        textDecorationStyle: archived ? 'solid' : null,
      },
    })
  }
  render () {
    const { item } = this.props
    const { description, amount } = item
    const styles = this.getStyles(item)
    return (
      <Swipeout right={this.getSwipeButtons(item)} backgroundColor="white" autoClose={true}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemLeft}>{description}</Text>
          <Text style={styles.itemRight}>{formatCurrency(amount)}</Text>
        </View>
      </Swipeout>)
  }
}
