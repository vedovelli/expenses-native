
import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Expense Tracker</Text>
        </View>
        <Image
          style={styles.image}
          source={require('../../assets/images/image.jpg')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 100
  },
  textContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    zIndex: 1,
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    color: 'white',
    opacity: 0.95,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  image: {
    resizeMode: 'cover',
    flex: 1
  },
})
