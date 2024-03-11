import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { colors } from "../utils/colors";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing, fontSizes } from "../utils/sizes";
import { Timing } from "../features/Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          style={{ height: spacing.sm }}
          color={colors.sienaGold}
        />
      </View>
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
  text: {
    color: colors.offWhite,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xl,
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
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
  },
  clearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
