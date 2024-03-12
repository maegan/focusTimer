import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/Countdown";
import { colors } from "../utils/colors";
import { spacing, fontSizes } from "../utils/sizes.js";
import { RoundedButton } from "../components/RoundedButton";
import { Timing } from "../features/Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject }) => {
  const [progress, setProgress] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.2);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
      </View>
      <Text style={styles.title}>Focus Feature: </Text>
      <Text style={styles.task}>{focusSubject}</Text>
      <ProgressBar
        style={styles.progress}
        progress={progress}
        color={colors.sienaGold}
      />
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>

      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
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
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    paddingTop: spacing.xl,
  },
  buttonWrapper: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubjectWrapper: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
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
    paddingBottom: spacing.md,
  },
  progress: {
    height: 16,
  },
});
