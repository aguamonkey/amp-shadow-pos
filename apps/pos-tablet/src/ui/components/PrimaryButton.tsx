import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";

export function PrimaryButton({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.btn, style]}>
      <Text style={styles.txt}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#111827",
    alignItems: "center",
  },
  txt: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
