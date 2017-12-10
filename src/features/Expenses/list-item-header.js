
import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class ListItemHeader extends PureComponent {
  render () {
    return (
      <Text style={styles.sectionHeader}>{this.props.section.title}</Text>
    )
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
})
