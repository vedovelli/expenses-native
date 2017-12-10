
import React, { PureComponent } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native'

export default class Expense extends PureComponent {
  onPress (expense) {
    Alert.alert(expense.id)
  }
  formatCurrency (amount) {
    const currencyFormated = parseFloat(amount, 10).toFixed(2)
    return `R$${currencyFormated}`
  }
  render () {
    const { item } = this.props
    const { description, amount } = item
    return (<TouchableOpacity onPress={() => this.onPress(item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemLeft}>{description}</Text>
          <Text style={styles.itemRight}>{this.formatCurrency(amount)}</Text>
        </View>
      </TouchableOpacity>)
  }
}

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
  },
  itemRight: {
    height: 44,
    padding: 10,
    fontSize: 16,
    textAlign: 'right',
    flex: 1,
  },
})
