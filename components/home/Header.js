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

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/insta-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <AntDesign style={styles.icon} name="plussquareo" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign  style={styles.icon} name="hearto" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo  style={styles.icon} name="paper-plane" size={24} color="white" />
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
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    color: "white",
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    resizeMode: "contain",
  },
});

export default Header;
