import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Countdown } from "../components/Countdown";
import { colors } from "../utils/colors";
import { fontSizes } from "../utils/sizes.js";

export const Timer = ({ focusSubject }) => (
  <View style={styles.container}>
    <View style={styles.countdown}>
      <Countdown isPaused onProgress={() => {}} />
    </View>
    <Text style={styles.title}>Focus Feature: </Text>
    <Text style={styles.task}>{focusSubject}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.3,
    aligntItems: "center",
    backgroundColor: "yellow",
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
});
