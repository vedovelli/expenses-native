
import React, { PureComponent } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native'
import Swipeout from 'react-native-swipeout'
import expenseRepository from 'repositories/expenses' // /src/respositories/expenses.js

export default class Expense extends PureComponent {
  onPress (expense) {
    expenseRepository.toggleArchived(expense)
  }
  formatCurrency (amount) {
    const currencyFormated = parseFloat(amount, 10).toFixed(2)
    return `R$${currencyFormated}`
  }
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
  render () {
    const { item } = this.props
    const { description, amount } = item
    const swipeoutButtons = [{
      text: 'Delete',
      backgroundColor: '#c00000',
      onPress: () => this.confirmDelete(item)
    }]
    const styles = StyleSheet.create({
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
        color: item.archived ? '#ccc' : null,
        textDecorationLine: item.archived ? 'line-through' : null,
        textDecorationStyle: item.archived ? 'solid' : null,
      },
      itemRight: {
        height: 44,
        padding: 10,
        fontSize: 16,
        textAlign: 'right',
        flex: 1,
        color: item.archived ? '#ccc' : null,
        textDecorationLine: item.archived ? 'line-through' : null,
        textDecorationStyle: item.archived ? 'solid' : null,
      },
    })
    return (
        <TouchableOpacity onPress={() => this.onPress(item)}>
          <Swipeout right={swipeoutButtons} backgroundColor="white" autoClose={true}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemLeft}>{description}</Text>
              <Text style={styles.itemRight}>{this.formatCurrency(amount)}</Text>
            </View>
          </Swipeout>
        </TouchableOpacity>)
  }
}
