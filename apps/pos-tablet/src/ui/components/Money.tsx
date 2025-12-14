import React from "react";
import { Text } from "react-native";

export function formatMoney(cents: number, currency: "USD" | "GBP" | "EUR") {
  const amount = cents / 100;
  return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(amount);
}

export function Money({ cents, currency }: { cents: number; currency: "USD" | "GBP" | "EUR" }) {
  return <Text>{formatMoney(cents, currency)}</Text>;
}
