import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { spacing, fontSizes } from "../utils/sizes";

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => <Text style={styles.text}>- {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus history:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.offWhite,
    fontSize: fontSizes.lg,
  },
  text: {
    color: colors.offWhite,
    fontSize: fontSizes.md,
    paddingLeft: spacing.md,
  },
  container: {
    flex: 1,
  },
});
