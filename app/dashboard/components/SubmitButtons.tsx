"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

interface buttonProps {
  text: string;
  variant?: "default" | "outline" | "destructive";
}

export function SubmitButtons({ text, variant }: buttonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </Button>
      ) : (
        <Button type="submit" variant={variant}>
          {text}
        </Button>
      )}
    </>
  );
}
