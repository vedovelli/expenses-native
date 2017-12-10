
import React, { Component } from 'react'
import { SectionList } from 'react-native'
import Expense from './expense'
import ListItemHeader from './list-item-header'

// /src/respositories/expenses.js
import expenseRepository from 'repositories/expenses'

export default class Expenses extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expenses: []
    }
  }
  componentDidMount () {
    expenseRepository.listWithSections(expenses => this.setState({ expenses }))
  }
  render() {
    return (
      <SectionList
        sections={this.state.expenses}
        renderSectionHeader={({section}) => <ListItemHeader section={section} />}
        renderItem={({item}) => <Expense item={item}/>}
        keyExtractor={(item, index) => index} />
    )
  }
}
