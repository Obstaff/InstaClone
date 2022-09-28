import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Top = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>@username</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <AntDesign name="ellipsis1" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 15,
  },
  iconsContainer: {
    color: "white",
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  text: {
    color: "white",
    justifyContent: "space-evenly",
  },
});

export default Top;
