
import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
// import { NativeRouter, Link } from 'react-router-native'
// import { Navigation, Card } from 'react-router-navigation'
import Form from './form'
import Header from './header'
import ExpenseList from './list'

export default class Expenses extends Component {
  onPress () {}
  render() {
    return (
      <View style={{flex: 1}}>
        <Header/>
        <Button title="New" onPress={this.onPress} />
        <ExpenseList/>
      </View>
    )
  }
}
