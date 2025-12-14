import React from "react";
import { Stack } from "expo-router";

export default function PosLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="cart" options={{ title: "Cart" }} />
      <Stack.Screen name="checkout" options={{ title: "Checkout" }} />
      <Stack.Screen name="scan" options={{ title: "Scan" }} />
      <Stack.Screen name="result" options={{ title: "Result" }} />
      <Stack.Screen name="explain" options={{ title: "Explain" }} />
    </Stack>
  );
}
