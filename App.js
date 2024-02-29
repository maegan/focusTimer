import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Text style={styles.text}>
          I am going to render the timer for {currentSubject}
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.forestGreen,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  text: {
    color: colors.offWhite,
    fontSize: 20,
  },
});
