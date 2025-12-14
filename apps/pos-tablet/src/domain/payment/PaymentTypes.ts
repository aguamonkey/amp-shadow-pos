export type PaymentEnv = "MOCK" | "LIVE";

export type PaymentIntent = {
  amountCents: number;
  currency: "USD" | "GBP" | "EUR";
  reference: string; // e.g. order id
};

export type PaymentResult =
  | { ok: true; id: string; message: string }
  | { ok: false; code: "CANCELLED" | "OFFLINE" | "FAILED"; message: string };
