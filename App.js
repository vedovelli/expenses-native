
/**
* Comentario qualquer apenas para demonstracao!
*/
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

  /**
  * Firebase auth is real-time.
  * Every time remote auth state,
  * changes this event listener gets executed.
  */
  authListener () {
    Firebase.auth().onAuthStateChanged(user => {
      const currentView = user != null ? 'expenses' : 'signin'
      if (this.state.currentView !== currentView) {
        this.setState({ currentView })
      }
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
