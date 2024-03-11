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
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
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
