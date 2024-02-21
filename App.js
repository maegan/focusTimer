//import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Focus } from "./src/features/Focus";

import { colors } from "./src/utils/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
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
