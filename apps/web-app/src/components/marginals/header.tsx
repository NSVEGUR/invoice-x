"use client";

import Image from "next/image";
import { Button } from "@ui/button";
import { NEXT_PUBLIC_AUTH_URL } from "@/lib/constants";
import Logo from "@components/logo";
import { User } from "@/lib/types";

export default function Header({ user }: { user?: User }): JSX.Element {
  return (
    <header className="fixed top-0 w-screen z-[100] px-20 py-5 bg-black border-b border-dominant flex justify-between">
      <Logo />
      <div className="flex gap-2 items-center">
        <div className="flex flex-col items-end justify-center gap-1">
          <Button
            intent="secondary"
            type="button"
            className="min-w-[0] h-6 text-sm max-w-max"
            onClick={() => {
              window.open(NEXT_PUBLIC_AUTH_URL + "/auth/logout", "_self");
            }}
          >
            Logout
          </Button>
          {user?.email && <p className="text-sm">{user.email}</p>}
        </div>
        {user?.picture && (
          <Image
            src={user.picture}
            alt="profile"
            height={40}
            width={40}
            className="rounded-full bg-muted-secondary"
          ></Image>
        )}
      </div>
    </header>
  );
}
