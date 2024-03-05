import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Countdown } from "../components/Countdown";

export const Timer = ({ focusSubject }) => (
  <View style={styles.container}>
    <View style={styles.countdown}>
      <Countdown isPaused onProgress={() => {}} />
    </View>
    <Text style={{ color: "white" }}>Focus Feature: {focusSubject}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
