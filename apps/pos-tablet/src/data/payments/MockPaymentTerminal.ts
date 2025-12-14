import type { PaymentIntent, PaymentResult } from "../../domain/payment/PaymentTypes";
import type { PaymentTerminal } from "./PaymentTerminal";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export class MockPaymentTerminal implements PaymentTerminal {
  readonly env = "MOCK" as const;

  async startPayment(_intent: PaymentIntent): Promise<PaymentResult> {
    // Simulate scan + processing
    await sleep(900);

    // Deterministic-ish demo behavior: 85% success
    const roll = Math.random();
    if (roll < 0.05) return { ok: false, code: "CANCELLED", message: "User cancelled the scan." };
    if (roll < 0.10) return { ok: false, code: "OFFLINE", message: "Network offline (simulated)." };
    if (roll < 0.15) return { ok: false, code: "FAILED", message: "Payment failed (simulated)." };

    return { ok: true, id: `mock_${Date.now()}`, message: "Payment authorised (simulated)." };
  }
}
