import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoice } from "@/context/InvoiceContext";

function BasicDetails() {
  const { invoice, updateInvoice } = useInvoice();
  return (
    <Card className="bg-gray-900 text-amber-100">
      <CardHeader>
        <CardTitle>Invoice Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="invoiceNumber">Invoice Number</Label>
          <Input
            value={invoice.invoiceNumber}
            onChange={(e) => updateInvoice({ invoiceNumber: e.target.value })}
            id="invoiceNumber"
            className="border-gray-600 mt-1 w-auto"
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={invoice.date}
            onChange={(e) => updateInvoice({ date: e.target.value })}
            className="border-gray-600 mt-1 w-auto"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default BasicDetails;
