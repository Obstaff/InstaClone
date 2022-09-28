import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Number from "./Number";
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
import Comments from "./Comments";

const Footer = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <AntDesign
              style={styles.icon}
              name="hearto"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              style={styles.icon}
              name="message1"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              style={styles.icon}
              name="paper-plane"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="bookmark" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.spaces}>
        <View>
          <Text style={styles.text}>
            <Number /> wyświetleń
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            <Comments />
          </Text>
        </View>
        <View>
          <Text style={styles.comments}>
            Zobcz wszystkie komentarze: <Number />
          </Text>
        </View>
        <View>
          <Text style={styles.text}>Zobacz tłumaczenie</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 15,
  },
  iconsContainer: {
    color: "white",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
    resizeMode: "contain",
  },
  comments: {
    color: "white",
    opacity: 0.5,
  },
  text: {
    color: "white",
  },
  spaces: {
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 20,
  },
});

export default Footer;
