import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

export const Focus = () => {
  return (
    <View>
      <Text style={styles.text}>Here we are</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.offWhite,
    fontSize: 20,
  },
});
