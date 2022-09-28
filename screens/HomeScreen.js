import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <Post />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
