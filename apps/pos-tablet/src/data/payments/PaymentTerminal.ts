import type { PaymentIntent, PaymentResult, PaymentEnv } from "../../domain/payment/PaymentTypes";

export interface PaymentTerminal {
  readonly env: PaymentEnv;
  startPayment(intent: PaymentIntent): Promise<PaymentResult>;
}
