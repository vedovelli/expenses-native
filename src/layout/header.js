
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
    zIndex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
  },
  text: {
    fontSize: 38,
    width: '100%',
    opacity: 0.95,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    shadowOpacity: 1.0,
    shadowColor: 'black',
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  image: {
    flex: 1
    resizeMode: 'cover',
  }
})
