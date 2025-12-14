import { MockPaymentTerminal } from "../../data/payments/MockPaymentTerminal";
import type { PaymentTerminal } from "../../data/payments/PaymentTerminal";

export type AppServices = {
  paymentTerminal: PaymentTerminal;
};

let services: AppServices | null = null;

export function getServices(): AppServices {
  if (services) return services;

  // Later: choose MOCK/LIVE based on config
  services = {
    paymentTerminal: new MockPaymentTerminal(),
  };

  return services;
}
