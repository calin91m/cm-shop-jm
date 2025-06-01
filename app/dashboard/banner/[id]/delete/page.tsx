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
import { deleteBanner } from "@/app/actions";
import { SubmitButtons } from "@/app/dashboard/components/SubmitButtons";

type SubmissionResult = { status: "success" } | null;

export default function BannerDeleteRoute(props: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [lastResult, setLastResult] = React.useState<SubmissionResult>(null);
  const { id } = React.use(props.params);

  React.useEffect(() => {
    if (lastResult && lastResult.status === "success") {
      router.push("/dashboard/banner");
    }
  }, [lastResult, router]);

  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this banner?</CardTitle>
          <CardDescription>
            This action is irreversible. This will permanently delete the
            banner.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-end gap-4">
          <Button variant="outline">
            <Link href="/dashboard/banner">Cancel</Link>
          </Button>
          <form
            action={async (formData: FormData) => {
              const result = await deleteBanner(undefined, formData);
              setLastResult(result);
            }}
          >
            <input type="hidden" name="bannerId" value={id} />
            <SubmitButtons text="Delete" variant="destructive"></SubmitButtons>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
