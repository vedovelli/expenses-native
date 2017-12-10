
import React, { Component } from 'react'
import { View, SectionList, Image } from 'react-native'
import Expense from './expense'
import Header from './header'
import ListItemHeader from './list-item-header'
import expenseRepository from 'repositories/expenses' // /src/respositories/expenses.js

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
      <View style={{flex: 1}}>
        <Header/>
        <View style={{flex: 4}}>
          <SectionList
            sections={this.state.expenses}
            renderSectionHeader={({section}) => <ListItemHeader section={section} />}
            renderItem={({item}) => <Expense item={item}/>}
            keyExtractor={(item, index) => index} />
        </View>
      </View>
    )
  }
}
