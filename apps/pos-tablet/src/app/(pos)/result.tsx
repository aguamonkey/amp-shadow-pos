import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { PrimaryButton } from "../../ui/components/PrimaryButton";

export default function ResultScreen() {
  const params = useLocalSearchParams<{
    ok?: string;
    code?: string;
    message?: string;
    paymentId?: string;
  }>();

  const ok = params.ok === "true";

  return (
    <View style={styles.page}>
      <Text style={[styles.h1, { color: ok ? "#065f46" : "#991b1b" }]}>
        {ok ? "Payment Successful" : "Payment Failed"}
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Message</Text>
        <Text style={styles.value}>{params.message ?? ""}</Text>

        {!ok ? (
          <>
            <Text style={styles.label}>Code</Text>
            <Text style={styles.value}>{params.code ?? ""}</Text>
          </>
        ) : (
          <>
            <Text style={styles.label}>Payment ID</Text>
            <Text style={styles.value}>{params.paymentId ?? ""}</Text>
          </>
        )}
      </View>

      <PrimaryButton title="Explain (What just happened?)" onPress={() => router.push("/(pos)/explain")} />
      <PrimaryButton title="New Sale" onPress={() => router.replace("/(pos)/cart")} style={{ backgroundColor: "#374151" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 18, gap: 14 },
  h1: { fontSize: 22, fontWeight: "900" },
  card: { padding: 16, borderRadius: 14, backgroundColor: "#f3f4f6", gap: 8 },
  label: { fontSize: 12, color: "#6b7280", textTransform: "uppercase" },
  value: { fontSize: 16 },
});
