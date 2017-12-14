
import React, { Component } from 'react'
import Toast from 'react-native-easy-toast'
import expenseRepository from 'repositories/expenses' // /src/respositories/expenses.js
import { today } from 'util/date'
import {
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  TextInput,
  Button } from 'react-native'

export default class Expense extends Component {
  constructor (props) {
    super(props)
    this.doSave = this.doSave.bind(this)
    this.dismiss = this.dismiss.bind(this)
    this.state = {
      amount: '',
      description: '',
      date: today()
    }
  }
  componentDidMount () {
    amountField.focus()
  }
  dismiss () {
    Keyboard.dismiss()
  }
  doSave () {
    const { amount, date, description } = this.state
    if (amount !== '' && description !== '' && date !== '') {
      const expense = { amount, date, description, archived: false }
      expenseRepository.save(expense).then(this.saveHandler())
    }
  }
  saveHandler () {
    this.reset()
    amountField.focus()
    this.refs.toast.show('Despesa salva com sucesso', 750)
  }
  reset () {
    this.setState({
      amount: '',
      description: '',
      date: today()
    })
  }
  render () {
    return (
      <TouchableWithoutFeedback onPress={this.dismiss}>
        <View style={styles.formContainer}>
          <Toast ref="toast" position="top" />
          <TextInput
            ref={e => amountField = e}
            placeholder="Valor (Ex. 10,00)"
            keyboardType="numeric"
            style={styles.expenseInput}
            onChangeText={(amount) => this.setState({amount: amount.toString()})}
            value={this.state.amount} />
          <TextInput
            placeholder="Descrição (Ex. 'Gasolina')"
            style={styles.expenseInput}
            onChangeText={(description) => this.setState({description})}
            value={this.state.description} />
          <TextInput
            placeholder="Data (dd/mm/aaaa)"
            style={styles.expenseInput}
            onChangeText={(date) => this.setState({date})}
            value={this.state.date} />
          <Button title="Salvar" onPress={this.doSave} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  expenseInput: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 5,
    borderColor: Platform.OS === 'ios' ? '#ccc' : null,
    borderWidth: Platform.OS === 'ios' ? 1 : null,
  }
})
