import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

const Comment = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://jsonplaceholder.typicode.com/comments?_limit=2";
  const fetchdata = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json), setData(json), setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchdata();
  });
  return (
    <SafeAreaView style={styles.text}>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView>
          {data.map((item, i) => (
            <View key={i}>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>@{item.email}: </Text>
                {item.body}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 15,
  },
  text: {
    color: "white",
    justifyContent: "space-evenly",
  },
});

export default Comment;
