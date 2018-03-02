
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
    this.intervalId = null;
    this.intervalAlt = null;
  }
  componentDidMount () {
    this.getBitcoin()
    this.alterInfo()

    /**
    * will update exchange rate every 5 minutes
    */
    this.intervalId = setInterval(() => this.getBitcoin(), 300000)
    /**
     * this will change the exchange info every 10 seconds
     */
    this.intervalAlt = setInterval(() => this.alterInfo(), 10000)
  }
  componentWillUnmount () {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.intervalAlt) {
      clearInterval(this.intervalAlt);
      this.intervalAlt = null;
    }
  }
  getBitcoin () {
    cryptocoins.foxbit().then(res => {
      const { last: exchangeRate } = res.data.ticker_1h.exchanges.FOX
      this.setState({ bitcoin: 'Foxbit Bitcoin: ' + formatCurrency(exchangeRate, "R$", 2, ".", ",") })
      const { last: exchangeRateMBT } = res.data.ticker_1h.exchanges.MBT
      this.setState({ bitcoin_mbt: 'Mercado Bitcoin: ' + formatCurrency(exchangeRateMBT, "R$", 2, ".", ",") })
      if(this.state.bitcoin_info == null) { this.alterInfo() }
    })
  }
  alterInfo () {
    if(this.state.lastInfo == 'mbt') {
      this.setState({ lastInfo: 'fox'});
    }
    else {
      this.setState({ lastInfo: 'mbt'});
    }
    this.setState({ bitcoin_info: this.state.lastInfo == 'fox' ? this.state.bitcoin : this.state.bitcoin_mbt } );
  }
  render () {
    return (<Text style={styles.foxbit}>
      {this.state.bitcoin_info}
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
