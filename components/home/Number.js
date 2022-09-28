import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Number extends React.Component {
  getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100000) + 1;
    return randomNumber;
  }
  constructor(props) {
    super(props);
    this.number = this.getRandomNumber();
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default Number;
