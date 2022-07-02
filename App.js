import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import Header from "./app/screens/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Songs from "./app/screens/Songs";
import Footer from "./app/screens/Footer";

function SecondApp({ navigation }) {
  return (
    <View style={styles.container} >
      <ScrollView>
        <Text> Open up App.js to start working on your app! </Text>
        <StatusBar style="light" backgroundColor="#333" />
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            headerTitle: () => <Header />,
          })}
          component={SecondApp}
        />
        <Stack.Screen name="Songs" component={Songs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
