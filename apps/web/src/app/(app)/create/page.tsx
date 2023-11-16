"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/invoice", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className="min-w-[500px] text-heading bg-black/50 backdrop-blur-sm gap-5 rounded-lg min-h-[50%] flex items-center justify-center flex-col"
    >
      <a href="/" className="self-start ml-10 text-accent hover:text-heading">
        &larr; Home
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
      <Button type="submit">Create Invoice</Button>
    </form>
  );
}
