"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/app/actions";
import { SubmitButtons } from "@/app/dashboard/components/SubmitButtons";

type SubmissionResult = { status: "success" } | null;

export default function DeleteProduct(props: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [lastResult, setLastResult] = React.useState<SubmissionResult>(null);
  const { id } = React.use(props.params);

  React.useEffect(() => {
    if (lastResult && lastResult.status === "success") {
      router.push("/dashboard/products");
    }
  }, [lastResult, router]);

  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this product?</CardTitle>
          <CardDescription>
            This action can&apos;t be undone. This will permanently delete the
            product.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-end gap-4">
          <Button variant="outline">
            <Link href="/dashboard/products">Cancel</Link>
          </Button>
          <form
            action={async (formData: FormData) => {
              const result = await deleteProduct(undefined, formData);
              setLastResult(result);
            }}
          >
            <input type="hidden" name="productId" value={id} />
            <SubmitButtons text="Delete" variant="destructive"></SubmitButtons>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
