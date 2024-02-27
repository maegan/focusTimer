import React, { useState } from "react";
//import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Focus } from "./src/features/Focus";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Text style={styles.text}>
            I am going to render the timer for {currentSubject}
          </Text>
        </View>
      )}
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
