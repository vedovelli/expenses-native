
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Expenses from './src/features/Expenses'
import Login from './src/features/Auth/Login'
import Firebase from 'firebase'

export default class SectionListBasics extends Component {
  constructor () {
    super()
    this.authListener()
    this.state = {
      currentView: 'signin'
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