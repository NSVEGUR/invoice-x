"use client";

import Image from "next/image";
import { Button } from "@ui/button";

export default function Header({ picture }: { picture?: string }): JSX.Element {
  return (
    <header className="px-20 py-5 bg-black border-b border-dominant flex justify-between">
      <div className="flex gap-2 items-center">
        <Image src="/turborepo.svg" width={35} height={35} alt="logo" />
        <h1 className="font-bold text-lg">InvoiceX</h1>
      </div>
      <div className="flex gap-2 items-center">
        <Button
          intent="secondary"
          type="button"
          className="min-w-[0] h-8"
          onClick={() => {
            window.open(
              process.env.NEXT_PUBLIC_API_URL + "/auth/logout",
              "_self"
            );
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
