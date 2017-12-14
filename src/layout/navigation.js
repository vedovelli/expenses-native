
import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default class AppNavigation extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Button title="Sair" onPress={this.props.signout}/>
        </View>
        <View style={{flex: 4}}>
          <Button title={this.props.buttonTitle} onPress={this.props.navigate}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 40
  }
})
