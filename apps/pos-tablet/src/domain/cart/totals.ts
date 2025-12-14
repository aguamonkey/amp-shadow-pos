import type { CartItem } from "./CartItem";

export type Totals = {
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
};

export function computeTotals(items: CartItem[], taxBps: number): Totals {
  const subtotalCents = items.reduce((sum, i) => sum + i.priceCents * i.qty, 0);
  const taxCents = Math.round((subtotalCents * taxBps) / 10_000);
  return { subtotalCents, taxCents, totalCents: subtotalCents + taxCents };
}
