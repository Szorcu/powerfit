import * as React from "react";

import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground focus-visible:border-ring aria-invalid:border-destructive field-sizing-content w-full border-b pb-2 text-base transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-0",
        className,
      )}
      {...props}
    />
  );
}
