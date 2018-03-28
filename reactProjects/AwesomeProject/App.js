import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};

        // Increment the counter every second
        setInterval(() => {
            this.setState(previousCount => {
                return {count: previousCount.count + 1};
            });
        }, 1000);
        // setInterval(this.incrementCount(), 1000);
    };

    // setState() {
    //     this.setState(previousCount => {
    //         return {count: previousCount.count + 1};});
    // };

    render() {
        let display = this.state.count;
        return (
            <Text style={styles.theText}>{display}</Text>
        );
    };
}

export default class App extends Component {

  buttonPressed() {
      // Counter.state.count += 1;
      // Counter.incrementCount();
      // alert('hi');
  }

  render() {
    return (
      <View style={styles.container}>
        <Counter />
        <Button
            style={styles.buttonStyle}
            onPress={this.buttonPressed}
            title="LAP"
            color="yellow"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    theText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 100,
    },
    buttonStyle: {
      fontSize: 100,
    }
})

