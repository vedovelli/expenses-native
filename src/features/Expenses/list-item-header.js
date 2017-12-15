
import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { formatCurrency } from 'util/currency'

export default class ListItemHeader extends PureComponent {
  render () {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTextLeft}>
          {this.props.section.title}
        </Text>
        <Text style={styles.sectionHeaderTextRight}>
          {formatCurrency(this.props.section.total)}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    flex: 1,
    padding: 16,
    borderColor: '#ccc',
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  sectionHeaderTextLeft: {
    flex: 1,
    fontSize: 16,
  },
  sectionHeaderTextRight: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
})
