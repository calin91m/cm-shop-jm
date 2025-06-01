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
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SubmitButtons } from "../../components/SubmitButtons";
import { useActionState, useState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { bannerSchema } from "@/app/lib/zodSchemas";
import type { SubmissionResult } from "@conform-to/dom";
import { createBanner } from "@/app/actions";
import React from "react";
import { useRouter } from "next/navigation";

export default function BannerCreateRoute() {
  const router = useRouter();
  // Use useActionState to manage the state of the action
  // This will handle the submission and result of the createBanner action
  const [lastResult, action] = useActionState<SubmissionResult, FormData>(
    createBanner,
    {} as SubmissionResult
  );
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: bannerSchema,
      });
    },
    // Only validate on submit to prevent premature submission
    shouldValidate: "onSubmit",
    shouldRevalidate: "onSubmit",
  });

  React.useEffect(() => {
    if (lastResult && lastResult.status === "success") {
      router.push("/dashboard/banner");
    }
  }, [lastResult, router]);

  return (
    <form className="max-w-4xl mx-auto p-6" id={form.id} action={action}>
      {/* Form fields for creating a banner */}
      <div className="flex items-center gap-x-4 ">
        <Button variant={"outline"} asChild size="icon">
          <Link href="/dashboard/banner/">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-bold tracking-tight">Create new Banner</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Create Banner</CardTitle>
          <CardDescription>
            Fill in the details below to create a new banner.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-3">
              <Label>Title</Label>
              <Input
                type="text"
                placeholder="Enter banner title"
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
              />
              {Array.isArray(fields.title.errors) &&
                fields.title.errors.length > 0 && (
                  <p className="text-red-500">
                    {fields.title.errors.join(", ")}
                  </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
              <Label>Image</Label>
              <Input
                type="url"
                placeholder="Enter image URL"
                name={fields.image.name}
                key={fields.image.key}
                defaultValue={fields.image.initialValue}
              />
              {Array.isArray(fields.image.errors) &&
                fields.image.errors.length > 0 && (
                  <p className="text-red-500">
                    {fields.image.errors.join(", ")}
                  </p>
                )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButtons text="Create Banner" />
        </CardFooter>
      </Card>
    </form>
  );
}
