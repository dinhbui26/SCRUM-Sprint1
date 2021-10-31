import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sprint: 1,
      member: 3
    };
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ margin: 50 }}>Hello world!</Text>
        <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>This is {this.props.name}</Text>
        <Text style={{ color: 'red' }}>I'm {this.state.age} years old </Text>
        <Text style={{ backgroundColor: 'cyan' }}>and we have is {this.state.weight} kg</Text>
        <View style={{ margin: 50 }}>
          <Button title="Hell I am HACKER HEHE" onPress={() => this.onPressNextYear()} />
        </View>
      </View>
    );
  }
  onPressNextYear() {
    var curSpr = this.state.sprint;
    var curMem = this.state.member
    this.setState({
      age: curSpr + 1,
      weight: curMem + 2
    });
  }
}
export default Hello;
