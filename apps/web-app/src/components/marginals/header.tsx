"use client";

import Image from "next/image";
import { Button } from "@ui/button";
import { NEXT_PUBLIC_AUTH_URL } from "@/lib/constants";
import Logo from "@components/logo";

export default function Header({ picture }: { picture?: string }): JSX.Element {
  return (
    <header className="fixed top-0 w-screen z-[100] px-20 py-5 bg-black border-b border-dominant flex justify-between">
      <Logo />
      <div className="flex gap-2 items-center">
        <Button
          intent="secondary"
          type="button"
          className="min-w-[0] h-8"
          onClick={() => {
            window.open(NEXT_PUBLIC_AUTH_URL + "/auth/logout", "_self");
          }}
        >
          Logout
        </Button>
        {picture && (
          <Image
            src={picture}
            alt="profile"
            height={30}
            width={30}
            className="rounded-full bg-muted-secondary"
          ></Image>
        )}
      </div>
    </header>
  );
}
