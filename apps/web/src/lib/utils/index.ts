import type CLSX from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: CLSX.ClassValue[]): string {
  return twMerge(clsx(inputs));
}
