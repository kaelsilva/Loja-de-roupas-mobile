import React from 'react';
import { View, Text } from 'react-native';
import { Component } from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return (
      <View>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});