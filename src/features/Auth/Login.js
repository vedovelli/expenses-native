
import Header from 'layout/header'
import React, { Component } from 'react'
import authRepository from 'repositories/auth'
import { Platform,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button } from 'react-native'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.doLogin = this.doLogin.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }
  componentDidMount () {
    emailField.focus()
  }
  dismiss () {
    Keyboard.dismiss()
  }
  doLogin () {
    const { email, password } = this.state
    if (email !== '' && password !== '') {
      const cleanEmail = email.toLowerCase().trim()
      authRepository.signin(cleanEmail, password)
    }
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <Header/>
        <TouchableWithoutFeedback onPress={this.dismiss}>
          <View style={styles.formContainer}>
            <TextInput
              ref={e => emailField = e}
              placeholder="E-mail"
              style={styles.textInput}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email} />
            <TextInput
              ref={e => passwordField = e}
              secureTextEntry={true}
              placeholder="Password"
              style={styles.textInput}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password} />
            <Button title="Acessar" onPress={this.doLogin} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 4,
    padding: 10
  },
  textInput: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 5,
    borderColor: Platform.OS === 'ios' ? '#ccc' : null,
    borderWidth: Platform.OS === 'ios' ? 1 : null,
  }
})
