
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Expenses from './src/features/Expenses'
import Login from './src/features/Auth/Login'

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
})