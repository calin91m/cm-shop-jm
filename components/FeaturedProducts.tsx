import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full mx-0 px-0">
      {/* Example product cards */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} className="flex flex-col items-center">
          <CardHeader className="w-full flex flex-col items-center p-0 pb-2">
            <Image
              src={`https://images.fashion-trading.com/catalog/product/21746${index + 1}/pic1.jpg`}
              alt={`Product ${index + 1}`}
              className="object-cover rounded-t aspect-square"
              width={250}
              height={250}
            />
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-1">
            <CardTitle className="text-lg font-semibold">Product {index + 1}</CardTitle>
            <p className="text-gray-500">€{(index + 1) * 10}.00</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
