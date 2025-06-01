"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SubmitButtons } from "./SubmitButtons";
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { editProduct } from "@/app/actions";
import { productSchema } from "@/app/lib/zodSchemas";
import { categories } from "@/app/lib/categories";
import { type $Enums } from "@/lib/generated/prisma/client";
import React from "react";

interface iAppProps {
  data: {
    name: string;
    id: string;
    description: string;
    status: $Enums.ProductStatus;
    price: number;
    images: string[];
    category: $Enums.Category;
    isFeatured: boolean;
  };
}

export function EditForm({ data }: iAppProps) {
  const router = useRouter();
  const [lastResult, action] = useActionState(editProduct, null);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: productSchema,
      });
    },
    // Only validate on submit to prevent premature submission
    shouldValidate: "onSubmit",
    shouldRevalidate: "onSubmit",
  });

  React.useEffect(() => {
    if (lastResult && (lastResult as any).status === "success") {
      router.push("/dashboard/products");
    }
  }, [lastResult, router]);
  return (
    <form className="max-w-4xl mx-auto p-6" id={form.id} action={action}>
      <input type="hidden" name="productId" value={data.id} />
      <div className="flex items-center gap-4">
        <Link href="/dashboard/products">
          <Button variant="outline">
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </Link>
        <h1 className="text-xl font-semibold tracking-tight text-orange-400">
          Edit Product
        </h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>
            In this form you can update your product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <Label>Category</Label>
                <Select
                  key={fields.category.key}
                  name={fields.category.name}
                  defaultValue={data.category}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {Array.isArray(fields.category.errors) &&
                  fields.category.errors.length > 0 && (
                    <p className="text-red-500">
                      {fields.category.errors.join(", ")}
                    </p>
                  )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                type="text"
                className="w-full"
                placeholder="Product Name"
                key={fields.name.key}
                name={fields.name.name}
                defaultValue={String(data.name)}
              />
              {Array.isArray(fields.name.errors) &&
                fields.name.errors.length > 0 && (
                  <p className="text-red-500">
                    {fields.name.errors.join(", ")}
                  </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea
                key={fields.description.key}
                name={fields.description.name}
                defaultValue={String(data.description)}
                placeholder="Product description comes here.... "
              />
              {Array.isArray(fields.description.errors) &&
                fields.description.errors.length > 0 && (
                  <p className="text-red-500">
                    {fields.description.errors.join(", ")}
                  </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input
                type="number"
                className="w-full"
                placeholder="€ 99.90"
                key={fields.price.key}
                name={fields.price.name}
                defaultValue={String(data.price)}
              />
              {Array.isArray(fields.price.errors) &&
                fields.price.errors.length > 0 && (
                  <p className="text-red-500">
                    {fields.price.errors.join(", ")}
                  </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch
                key={fields.isFeatured.key}
                name={fields.isFeatured.name}
                defaultChecked={data.isFeatured}
              />
              {Array.isArray(fields.isFeatured.errors) &&
                fields.isFeatured.errors.length > 0 && (
                  <p className="text-red-500">
                    {fields.isFeatured.errors.join(", ")}
                  </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select
                key={fields.status.key}
                name={fields.status.name}
                defaultValue={String(data.status)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              {Array.isArray(fields.status.errors) &&
                fields.status.errors.length > 0 && (
                  <p className="text-red-500">
                    {fields.status.errors.join(", ")}
                  </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
              <Label>Main Image</Label>
              <Input
                type="url"
                placeholder="Image URL * required"
                defaultValue={data.images[0] ?? ""}
                key={fields.images.key + "-0"}
                name={fields.images.name}
              />
              <Label>Additional Images</Label>
              <Input
                type="url"
                name={fields.images.name}
                key={fields.images.key + "-1"}
                defaultValue={data.images[1] ?? ""}
                placeholder="Image URL - Optional"
              />
              <Input
                type="url"
                name={fields.images.name}
                key={fields.images.key + "-2"}
                defaultValue={data.images[2] ?? ""}
                placeholder="Image URL - Optional"
              />
              <Input
                type="url"
                name={fields.images.name}
                key={fields.images.key + "-3"}
                defaultValue={data.images[3] ?? ""}
                placeholder="Image URL - Optional"
              />
              <Input
                type="url"
                name={fields.images.name}
                key={fields.images.key + "-4"}
                defaultValue={data.images[4] ?? ""}
                placeholder="Image URL - Optional"
              />
              {Array.isArray(fields.images.errors) &&
                fields.images.errors.length > 0 && (
                  <p className="text-red-500">
                    {fields.images.errors.join(", ")}
                  </p>
                )}
            </div>
          </div>
          <div className="mt-6 flex justify-end"></div>
        </CardContent>
        <CardFooter>
          <SubmitButtons text="Update Product" />
        </CardFooter>
      </Card>
    </form>
  );
}
