import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

function Header() {
  return (
    <ImageBackground
      source={require("../../assets/imageback.webp")}
      style={styles.img}
    >
      <Text style={styles.header}>Home</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 56,
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: -16,
    opacity: .5
  },
});

export default Header;
