
import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class ListItemHeader extends PureComponent {
  render () {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTextLeft}>{this.props.section.title}</Text>
        <Text style={styles.sectionHeaderTextRight}>R${this.props.section.total}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    padding: 16,
    backgroundColor: 'rgba(247,247,247,1.0)',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  sectionHeaderTextLeft: {
    fontSize: 16,
    flex: 1,
  },
  sectionHeaderTextRight: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
})
