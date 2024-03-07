import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { colors } from "../utils/colors";
import { fontSizes } from "../utils/sizes.js";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject }) => {
  const [progress, setProgress] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={isStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
      </View>
      <ProgressBar
        style={styles.progress}
        progress={progress}
        color={colors.sienaGold}
      />
      <Text style={styles.title}>Focus Feature: </Text>
      <Text style={styles.task}>{focusSubject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.3,
    aligntItems: "center",
  },
  title: {
    color: colors.offWhite,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.xl,
  },
  task: {
    color: colors.offWhite,
    textAlign: "center",
    fontSize: fontSizes.lg,
  },
  progress: {
    height: 16,
  },
});
