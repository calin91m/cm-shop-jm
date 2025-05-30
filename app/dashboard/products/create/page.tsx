import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ProductCreateRoute() {
  return (
    <form className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/products">
          <Button variant="outline">
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </Link>
        <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>In this form you can create your product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Product Style</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sneaker">Sneaker</SelectItem>
                    <SelectItem value="sandals">Sandals</SelectItem>
                    <SelectItem value="boots">Boots</SelectItem>
                    <SelectItem value="slip-ons">Slip-ons</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label>Product Style-2</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sneaker-low">Sneaker-low</SelectItem>
                    <SelectItem value="sneaker-high">Sneaker-high</SelectItem>
                    <SelectItem value="platform-sandals">Platform sandals</SelectItem>
                    <SelectItem value="chelsea-boots">Chelsea Boots</SelectItem>
                    <SelectItem value="lace-up-boots">Lace-up boots</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input type="text" className="w-full" placeholder="Product Name" required />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea placeholder="Product description comes here.... " required />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input type="number" className="w-full" placeholder="€ 99.90" required />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select defaultValue="draft">
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Main Image</Label>
              <Input type="url" required className="" placeholder="Image URL * required" />
              <Label>Additional Images</Label>
              <Input type="url" className="" placeholder="Image URL - Optional" />
              <Input type="url" className="" placeholder="Image URL - Optional" />
              <Input type="url" className="" placeholder="Image URL - Optional" />
              <Input type="url" className="" placeholder="Image URL - Optional" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button type="submit" className="w-full md:w-auto">
              Create Product
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
