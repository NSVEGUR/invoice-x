"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [error, setError] = useState<string | undefined>(undefined);
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let success = false;
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/invoice", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await response.json();
      success = result.success;
      if (result.success == false) {
        setError(result.message ?? "Some Unknown Error Occurred");
      }
    } catch (err) {
      console.error(err);
    }
    if (success) {
      router.push("/");
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className="min-w-[500px] text-heading bg-black/50 backdrop-blur-sm gap-5 rounded-lg min-h-[50%] flex items-center justify-center flex-col p-5"
    >
      <a href="/" className="self-start ml-5 text-accent hover:text-heading">
        &#8678; Home
      </a>
      <h1 className=" text-2xl font-semibold">Invoice Creation</h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="amount">Amount</label>
        <Input type="text" name="amount" placeholder="Invoice Amount" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="due">Due Date</label>
        <Input type="date" name="due" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="recipient">Recipient</label>
        <Input
          type="text"
          name="recipient"
          placeholder="Recipient Email Address"
        />
      </div>
      {error && <small className="text-red-500">{error}</small>}
      <Button type="submit">Create Invoice</Button>
    </form>
  );
}
