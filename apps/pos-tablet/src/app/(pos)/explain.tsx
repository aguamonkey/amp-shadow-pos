import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PrimaryButton } from "../../ui/components/PrimaryButton";
import { router } from "expo-router";

export default function ExplainScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.h1}>Explain</Text>
      <Text style={styles.p}>
        This screen is the “narration layer” for demos. It makes the payment flow legible to non-technical audiences.
      </Text>

      <View style={styles.card}>
        <Text style={styles.h2}>What happened?</Text>
        <Text style={styles.p}>
          • The POS displayed an amount due{"\n"}
          • A customer scanned to pay{"\n"}
          • The payment was authorised and confirmed{"\n"}
          • Result + failure states are shown clearly
        </Text>

        <Text style={styles.h2}>Where AMP fits (high-level)</Text>
        <Text style={styles.p}>
          AMP can be used as collateral to make digital payments feel instant and reliable for merchants.
          This demo app’s job is to make that flow tangible at events and partner conversations.
        </Text>

        <Text style={styles.h2}>Next</Text>
        <Text style={styles.p}>
          In the next milestone we replace the mock terminal with the real Flexa Scan component and add LIVE/MOCK switching.
        </Text>
      </View>

      <PrimaryButton title="Back to Result" onPress={() => router.back()} />
      <PrimaryButton title="New Sale" onPress={() => router.replace("/(pos)/cart")} style={{ backgroundColor: "#374151" }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 18, gap: 14 },
  h1: { fontSize: 22, fontWeight: "900" },
  h2: { fontSize: 16, fontWeight: "800", marginTop: 8 },
  p: { color: "#4b5563", lineHeight: 20 },
  card: { padding: 16, borderRadius: 14, backgroundColor: "#f3f4f6", gap: 6 },
});
