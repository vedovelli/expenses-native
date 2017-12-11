
import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Form from './form'
import Header from './header'
import ExpenseList from './list'

export default class Expenses extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleList: false,
      buttonTitle: 'Lista de Despesas'
    }
  }
  navigate () {
    this.setState({
      visibleList: !this.state.visibleList,
      buttonTitle: this.state.visibleList ? 'Lista de Despesas' : 'Incluir Despesa'
    })
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header/>
        <Button title={this.state.buttonTitle} onPress={() => this.navigate()}/>
        {this.state.visibleList ? <ExpenseList/> : null}
        {!this.state.visibleList ? <Form/> : null}
      </View>
    )
  }
}
