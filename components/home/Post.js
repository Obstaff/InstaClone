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

import Footer from "./Footer";
import Top from "./Top";

const Post = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://jsonplaceholder.typicode.com/photos?_limit=5";
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
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <ScrollView>
          {data.map((item, i) => (
            <View key={i}>
              <Top/>
              <TouchableOpacity>
              <Image
                source={{ uri: item.url }}
                style={{ width: "auto", height: 300 }}
              />
              </TouchableOpacity>
             <Footer/>
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
});

export default Post;
