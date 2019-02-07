/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, ScrollView, Button} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  render() {
    return (
  
        <View style={styles.container}>
          <Text style={styles.welcome}>Hello Welcome to React Native!</Text>

          <View style={styles.formview}>
            <Text>User Name</Text>
            <TextInput placeholder="User Name" style={styles.inputcontrole} />
            <Text>Password</Text>
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputcontrole} />
          </View>
          <Button title="Login" color="#CCCCCC" style={styles.button}/>
        </View>
    );
  }
}

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: 'blue'
    },
    headerTitleStyle: {color: '#FFFFFF'}
  }
  render() {
    return (
  
        <View style={styles.container}>
          <Text style={styles.welcome}>Hello Welcome to React Native!</Text>

          <View style={styles.formview}>
            <Text>User Name</Text>
            <TextInput placeholder="User Name" style={styles.inputcontrole} />
            <Text>Password</Text>
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputcontrole} />
          </View>
          <Button title="Login" color="#CCCCCC" style={styles.button} onPress={
            () => this.props.navigation.navigate('Dashboard')
          } />
        </View>
    );
  }
}

class DashBoradScreen extends Component {
  render() {
    return (
  
        <View style={styles.container}>
          <Text style={styles.welcome}>Hello Welcome to React Dashbaord!</Text>
        </View>
    );
  }
}

const navigator = new createStackNavigator({
  Login: {screen: LoginScreen},
  Dashboard: {screen: DashBoradScreen}
}, {
  initialRouteName: "Login",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'blue'
    }
  }
}
);

export default createAppContainer(navigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  button: {
    backgroundColor: '#CCCCCC',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    color: '#FFFFFF' 
  },

  formview: {
    backgroundColor: '#F5F5F5',
    alignItems: 'flex-start'
  },

  inputcontrole: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: 200,
    height: 30,
    borderRadius: 5,
    marginBottom: 10
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
