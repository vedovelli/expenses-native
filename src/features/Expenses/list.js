
import React, { Component } from 'react'
import { View, SectionList, StyleSheet } from 'react-native'
import ListItem from './list-item'
import ListItemHeader from './list-item-header'

export default class ExpenseList extends Component {
  render () {
    return (
      <View style={{flex: 4}}>
        <SectionList
          sections={this.props.expenses}
          renderSectionHeader={({section}) => <ListItemHeader section={section} />}
          renderItem={({item}) => <ListItem item={item}/>}
          keyExtractor={(item, index) => index} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 5,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: '#f4f4f4',
  },
  itemLeft: {
    flex: 1,
    height: 44,
    padding: 10,
    fontSize: 16,
  },
  itemRight: {
    flex: 1,
    height: 44,
    padding: 10,
    fontSize: 16,
    textAlign: 'right',
  },
})
