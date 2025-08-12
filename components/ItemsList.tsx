import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import InvoiceItem from "./InvoiceItem";
import { useInvoice } from "@/context/InvoiceContext";


function ItemsList() {
  const {invoice,addItem} = useInvoice();

  return (
    <div>
      <Card className="bg-gray-900 text-amber-100">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Invoice Items</CardTitle>
          <Button onClick={addItem} size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {invoice.items.map((item, index) => (
            <InvoiceItem
              key={item.id}
              item={item}
              index={index}
              canRemove={invoice.items.length > 1}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default ItemsList;
