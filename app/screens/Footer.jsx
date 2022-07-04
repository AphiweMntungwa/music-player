import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
  Text,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

function Footer({ navigation }) {
  const [iconNames, setIconNames] = useState([]);

  function getIcon() {
    setIconNames([
      { icon: <Entypo name="folder-music" size={24} color="black" /> },
      {
        icon: (
          <AntDesign
            name="addfolder"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Songs")}
          />
        ),
      },
      { icon: <AntDesign name="folderopen" size={24} color="black" /> },
      { icon: <AntDesign name="search1" size={24} color="black" /> },
    ]);
  }

  useEffect(() => {
    getIcon();
  }, []);

  console.log(iconNames);

  function List({ hoc }) {
    return <View style={styles.iconView}>{hoc}</View>;
  }

  return (
    <View style={styles.icons}>
      <FlatList
        contentContainerStyle={{ flex: 1, justifyContent:'space-evenly' }}
        data={iconNames}
        horizontal
        renderItem={({ item }) => <List hoc={item.icon} />}
        keyExtractor={(item) => item.icon.props.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    paddingVertical: 5,
    borderTopColor: "green",
    borderTopWidth: 1,
    borderStyle: "dotted",
  },
  iconView: {},
});

export default Footer;
