import type { InputHTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "inline-flex items-center justify-center rounded-md p-2 min-w-[400px] placeholder:text-sm placeholder:text-muted text-heading",
  {
    variants: {
      intent: {
        primary:
          "bg-dominant outline-none focus:bg-muted border border-dominant",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

function Input({ className, intent, ...props }: InputProps): JSX.Element {
  return (
    <input className={cn(inputVariants({ className, intent }))} {...props} />
  );
}

export { Input, inputVariants };
