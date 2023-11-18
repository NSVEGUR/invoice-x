import { AnchorHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm transition-colors duration-200",
  {
    variants: {
      intent: {
        primary: " bg-white text-inverted hover:bg-muted hover:text-dominant",
        secondary:
          " bg-muted-secondary text-dominant hover:bg-white hover:text-inverted",
      },
      size: {
        primary: "py-2 px-4",
        secondary: "py-[2px] px-2",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "primary",
    },
  }
);

interface Props
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

function Link({ className, size, intent, ...props }: Props) {
  return (
    <a className={cn(linkVariants({ className, intent, size }))} {...props} />
  );
}

export { Link, linkVariants };
