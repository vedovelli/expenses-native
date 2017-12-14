
import Firebase from 'firebase'
import Header from 'layout/header'
import AppNavigation from 'layout/navigation'
import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import expenseRepository from 'repositories/expenses' // /src/respositories/expenses.js
import Form from './form'
import ExpenseList from './list'

export default class Expenses extends Component {
  constructor (props) {
    super(props)
    this.navigate = this.navigate.bind(this)
    this.signout = this.signout.bind(this)
    this.state = {
      expenses: [],
      visibleList: false,
      buttonTitle: 'Lista de Despesas'
    }
  }
  componentDidMount () {
    expenseRepository.listWithSections(expenses => {
      this.setState({ expenses })
    })
  }
  navigate () {
    this.setState({
      visibleList: !this.state.visibleList,
      buttonTitle: this.state.visibleList ? 'Lista de Despesas' : 'Incluir Despesa'
    })
  }
  signout () {
    Firebase.auth().signOut()
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <Header/>
        <AppNavigation
          buttonTitle={this.state.buttonTitle}
          navigate={this.navigate}
          signout={this.signout}/>
        {this.state.visibleList ? <ExpenseList expenses={this.state.expenses}/> : null}
        {!this.state.visibleList ? <Form/> : null}
      </View>
    )
  }
}
