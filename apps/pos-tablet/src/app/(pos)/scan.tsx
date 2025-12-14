import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { getServices } from "../../core/di/container";
import type { PaymentIntent } from "../../domain/payment/PaymentTypes";

export default function ScanScreen() {
  const { totalCents } = useLocalSearchParams<{ totalCents?: string }>();
  const total = Number(totalCents ?? "0");

  const [status, setStatus] = useState("Waiting for scan…");

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const services = getServices();
      setStatus(`Processing (${services.paymentTerminal.env})…`);

      const intent: PaymentIntent = {
        amountCents: total,
        currency: "USD",
        reference: `order_${Date.now()}`,
      };

      const res = await services.paymentTerminal.startPayment(intent);
      if (cancelled) return;

      router.replace({
        pathname: "/(pos)/result",
        params: {
          ok: String(res.ok),
          code: res.ok ? "" : res.code,
          message: res.message,
          paymentId: res.ok ? res.id : "",
        },
      });
    }

    run();
    return () => { cancelled = true; };
  }, [total]);

  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Scan</Text>
      <Text style={styles.p}>
        In v1 this will be the Flexa Scan component. For now we simulate the terminal.
      </Text>

      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 12 }}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 18, gap: 12 },
  h1: { fontSize: 22, fontWeight: "800" },
  p: { color: "#4b5563" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});
