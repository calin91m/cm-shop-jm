import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function ProductsRoute() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button className="flex items-center gap-x-2">
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Add Product</span>
        </Button>
      </div>
    </>
  );
}
