import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      counter: 0
    }

  }

  componentDidMount = () => {
  }

  handlePress = () => {
    this.setState((prevState) => ({
      counter: prevState.counter+1
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>What up suckerberg this took too damn long to work!</Text>
        <Text>안녕 하세요!</Text>
        <Text>Is this working?</Text>
        <Text>Counter: {this.state.counter}</Text>
        <Button onPress={this.handlePress} title="Hi! I'm a button!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
