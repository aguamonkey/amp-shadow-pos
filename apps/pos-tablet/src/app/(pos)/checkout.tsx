import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Money } from "../../ui/components/Money";
import { PrimaryButton } from "../../ui/components/PrimaryButton";

export default function CheckoutScreen() {
  const { totalCents } = useLocalSearchParams<{ totalCents?: string }>();
  const total = Number(totalCents ?? "0");

  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Ready to take payment</Text>
      <Text style={styles.p}>This is a demo merchant POS flow (MOCK terminal for now).</Text>

      <View style={styles.card}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Amount Due</Text>
        <Text style={{ fontSize: 24, fontWeight: "800" }}>
          <Money cents={total} currency="USD" />
        </Text>
      </View>

      <PrimaryButton
        title="Start Scan"
        onPress={() =>
          router.push({
            pathname: "/(pos)/scan",
            params: { totalCents: String(total) },
          })
        }
      />
      <PrimaryButton title="Back to Cart" onPress={() => router.back()} style={{ backgroundColor: "#374151" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 18, gap: 14 },
  h1: { fontSize: 22, fontWeight: "800" },
  p: { color: "#4b5563" },
  card: { padding: 16, borderRadius: 14, backgroundColor: "#f3f4f6", gap: 8 },
});
