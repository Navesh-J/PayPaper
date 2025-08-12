import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoice } from "@/context/InvoiceContext";

function ContactDetails() {
  const { invoice, updateInvoice } = useInvoice();
  return (
    <Card className="bg-gray-900 text-amber-100">
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium">From (Your Details)</h3>
          <div>
            <Label htmlFor="fromName">Name</Label>
            <Input
              id="fromName"
              value={invoice.fromName}
              onChange={(e)=>updateInvoice({fromName:e.target.value})}
              className="border-gray-600 mt-1 w-auto"
              placeholder="Your Name or Company"
            />
          </div>
          <div>
            <Label htmlFor="fromEmail">Email</Label>
            <Input
              id="fromEmail"
              type="email"
              value={invoice.fromEmail}
              onChange={(e)=>updateInvoice({fromEmail:e.target.value})}
              placeholder="your@mail.com"
              className="border-gray-600 mt-1 w-auto"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">To (Client Details)</h3>
          <div>
            <Label htmlFor="toName">Name</Label>
            <Input
              id="toName"
              value={invoice.toName}
              onChange={(e)=>updateInvoice({toName:e.target.value})}
              className="border-gray-600 mt-1 w-auto"
              placeholder="Client Name or Company"
            />
          </div>
          <div>
            <Label htmlFor="toEmail">Email</Label>
            <Input
              id="toEmail"
              type="email"
              value={invoice.toEmail}
              onChange={(e)=>updateInvoice({toEmail:e.target.value})}
              placeholder="client@mail.com"
              className="border-gray-600 mt-1 w-auto"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactDetails;
