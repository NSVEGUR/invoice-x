"use client";

import { Button } from "@ui/button";
import Image from "next/image";
import { NEXT_PUBLIC_AUTH_URL } from "@/lib/constants";

export default function (): JSX.Element {
  const authenticate = () => {
    window.open(NEXT_PUBLIC_AUTH_URL + "/auth/google/callback", "_self");
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
