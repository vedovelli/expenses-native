
import Firebase from 'firebase'
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Login from './src/features/Auth/Login'
import BitcoinExchangeRate from './src/features/Bitcoin/exchange-rate'
import Expenses from './src/features/Expenses'

export default class SectionListBasics extends Component {
  constructor () {
    super()
    this.authListener()
    this.state = {
      currentView: 'expenses'
    }
  }
  authListener () {
    Firebase.auth().onAuthStateChanged(user => {
      const currentView = user != null ? 'expenses' : 'signin'
      this.setState({ currentView })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <BitcoinExchangeRate/>
        {this.state.currentView === 'signin' ? <Login/> : null}
        {this.state.currentView === 'expenses' ? <Expenses/> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
})
