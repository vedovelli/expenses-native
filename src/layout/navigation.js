
import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default class AppNavigation extends Component {
  render () {
    return (
      <View style={styles.container}>
          <Button title="Sair" onPress={this.props.signout}/>
          <Button title={this.props.buttonTitle} onPress={this.props.navigate}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
