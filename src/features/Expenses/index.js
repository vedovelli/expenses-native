
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Form from './form'
import Header from './header'
import ExpenseList from './list'

export default class Expenses extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header/>
        <Form/>
      </View>
    )
  }
}
