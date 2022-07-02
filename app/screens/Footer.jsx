import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Text,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

function Footer({ navigation }) {
  return (
    <View style={styles.icons}>
      <Entypo name="folder-music" size={24} color="black" />
      <AntDesign
        name="addfolder"
        size={24}
        color="black"
        onPress={() => navigation.navigate("Songs")}
      />
      <AntDesign name="folderopen" size={24} color="black" />
      <AntDesign name="search1" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    paddingVertical: 5,
    flexDirection: "row",
    // marginTop: "100%",
    justifyContent: "space-evenly",
  },
  list: {},
});

export default Footer;
