"use client";

import { Button } from "@ui/button";
import Image from "next/image";

export default function (): JSX.Element {
  const authenticate = () => {
    window.open(
      process.env.NEXT_PUBLIC_API_URL + "/auth/google/callback",
      "_self"
    );
  };
  return (
    <Button
      intent="secondary"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        authenticate();
      }}
    >
      Continue With Google
      <Image
        alt="Google Logo"
        height={10}
        priority
        src="/google.svg"
        width={30}
        className="h-auto"
      />
    </Button>
  );
}
