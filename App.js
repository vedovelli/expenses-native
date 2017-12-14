
import accounting from 'accounting'
import cryptocoins from 'cryptocoins'
import Firebase from 'firebase'
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Login from './src/features/Auth/Login'
import Expenses from './src/features/Expenses'

export default class SectionListBasics extends Component {
  constructor () {
    super()
    this.authListener()
    this.state = {
      currentView: 'expenses',
      bitcoin: ''
    }
  }
  componentDidMount () {
    this.getBitcoin()
    setInterval(() => this.getBitcoin(), 300000)
  }
  getBitcoin () {
    cryptocoins.foxbit().then(res => {
      const { last: foxbit } = res.data.ticker_1h.exchanges.FOX
      this.setState({ bitcoin: accounting.formatMoney(foxbit, "R$", 2, ".", ",") })
    })
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
        <Text style={styles.foxbit}>Foxbit Bitcoin: {this.state.bitcoin}</Text>
        {this.state.currentView === 'signin' ? <Login/> : null}
        {this.state.currentView === 'expenses' ? <Expenses/> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  foxbit: {
    paddingTop: 2,
    paddingBottom: 2,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#2a2a2a'
  },
  container: {
   flex: 1,
   paddingTop: 22
  },
})