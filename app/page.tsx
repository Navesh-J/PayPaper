"use client";

import { useState } from "react";
import InvoicePreview from "../components/InvoicePreview";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import InvoiceForm from "@/components/InvoiceForm";

export default function Home() {
  const [showPreview, setShowPreview] = useState(false);

  
  if (showPreview) {
    return <InvoicePreview onBack={()=> setShowPreview(false)} />;
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-amber-200">PayPaper</h1>
            <p className="text-gray-600">
              Create professional invoices quickly
            </p>
          </div>
          <Button
            onClick={() => {
              setShowPreview(true);
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>
        <InvoiceForm />
      </div>
    </div>
  );
}
