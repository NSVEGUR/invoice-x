import type { ButtonHTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md min-w-[400px] transition-colors duration-200",
  {
    variants: {
      intent: {
        primary: "bg-inverted text-inverted hover:bg-muted hover:text-heading",
        secondary: "bg-muted-secondary text-heading hover:bg-muted",
      },
      size: {
        primary: "py-2 px-4",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "primary",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  type: "button" | "submit";
}

function Button({
  className,
  size,
  intent,
  type,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(buttonVariants({ className, intent, size }))}
      {...props}
      type={type === "button" ? "button" : "submit"}
    />
  );
}

export { Button, buttonVariants };
