
import cryptocoins from 'cryptocoins'
import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { formatCurrency } from 'util/currency'

export default class BitcoinExchangeRate extends Component {
  constructor () {
    super()
    this.state = {
      bitcoin: ''
    }
  }
  componentDidMount () {
    this.getBitcoin()

    /**
    * will update exchange rate every 5 minutes
    */
    setInterval(() => this.getBitcoin(), 300000)
  }
  getBitcoin () {
    cryptocoins.foxbit().then(res => {
      const { last: exchangeRate } = res.data.ticker_1h.exchanges.FOX
      this.setState({ bitcoin: formatCurrency(exchangeRate, "R$", 2, ".", ",") })
    })
  }
  render () {
    return (<Text style={styles.foxbit}>
      Foxbit Bitcoin: {this.state.bitcoin}
    </Text>)
  }
}

const styles = StyleSheet.create({
  foxbit: {
    paddingTop: 2,
    color: 'white',
    paddingBottom: 2,
    textAlign: 'center',
    backgroundColor: '#2a2a2a'
  }
})
