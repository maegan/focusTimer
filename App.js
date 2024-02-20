//import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HI there</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.forestGreen,
    flex: 1,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: colors.offWhite,
  },
});
