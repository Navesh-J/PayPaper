import type { InvoiceData } from "@/types/Invoice";

export const initialInvoiceData: InvoiceData = {
  invoiceNumber: `INV-${Date.now()}`,
  date: new Date().toISOString().split("T")[0],
  fromName: "",
  fromEmail: "",
  toName: "",
  toEmail: "",
  items: [{ id: "1", description: "", quantity: 1, rate: 0, amount: 0 }],
  taxAmount: 0,
  taxRate: 0,
  subtotal: 0,
  total: 0, 
};
