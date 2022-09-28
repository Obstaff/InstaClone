import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "black" }}>
        <Text
          style={{
            backgroundColor: "black",
            color: "white",
            marginHorizontal: 20,
            marginTop: 40,
          }}
        >
          Search bar:{" "}
        </Text>
        <Image
          style={{ width: "auto" }}
          source={require("../assets/searchbar.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
