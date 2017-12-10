
import React, { Component } from 'react'
import { StyleSheet, View, SectionList, Image } from 'react-native'
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
      <View style={styles.background}>
        <Image
          style={styles.image}
          source={{uri: 'https://s20.postimg.org/gtcxjhiul/image.jpg'}}/>
        <View style={styles.list}>
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

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  list: {
    flex: 4
  },
})
