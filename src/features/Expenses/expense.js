
import React, { PureComponent } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native'

export default class Expense extends PureComponent {
  onPress (expense) {
    Alert.alert(expense.id)
  }
  render () {
    const { item } = this.props
    const { description } = item
    return (<TouchableOpacity onPress={() => this.onPress(item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{description}</Text>
        </View>
      </TouchableOpacity>)
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderColor: '#f4f4f4',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
