import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { router } from "expo-router";
import type { CartItem } from "../../domain/cart/CartItem";
import { computeTotals } from "../../domain/cart/totals";
import { Money } from "../../ui/components/Money";
import { PrimaryButton } from "../../ui/components/PrimaryButton";



const TAX_BPS = 800; // 8%

const INITIAL: CartItem[] = [
  { id: "1", name: "Cold Brew", priceCents: 450, qty: 1 },
  { id: "2", name: "Sandwich", priceCents: 995, qty: 1 },
];

export default function CartScreen() {
  const [items] = useState<CartItem[]>(INITIAL);
  const totals = useMemo(() => computeTotals(items, TAX_BPS), [items]);

  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Demo Cart</Text>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowName}>{item.name} × {item.qty}</Text>
            <Money cents={item.priceCents * item.qty} currency="USD" />
          </View>
        )}
      />

      <View style={styles.totals}>
        <View style={styles.row}><Text>Subtotal</Text><Money cents={totals.subtotalCents} currency="USD" /></View>
        <View style={styles.row}><Text>Tax</Text><Money cents={totals.taxCents} currency="USD" /></View>
        <View style={[styles.row, { marginTop: 6 }]}><Text style={{ fontWeight: "700" }}>Total</Text><Text style={{ fontWeight: "700" }}><Money cents={totals.totalCents} currency="USD" /></Text></View>
      </View>

      <PrimaryButton
        title="Checkout"
        onPress={() =>
          router.push({
            pathname: "/(pos)/checkout",
            params: { totalCents: String(totals.totalCents) },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, padding: 18, gap: 14 },
  h1: { fontSize: 22, fontWeight: "800" },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  rowName: { fontSize: 16 },
  totals: { paddingTop: 10, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: "#ddd", gap: 6 },
});
