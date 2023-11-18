import type CLSX from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export function cn(...inputs: CLSX.ClassValue[]): string {
  return twMerge(clsx(inputs));
}
