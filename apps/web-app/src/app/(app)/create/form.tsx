"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSnackbar } from "@components/snackbar/snackbar.provider";

export default function Form() {
  const searchParams = useSearchParams();
  const random = searchParams.get("random");
  const [error, setError] = useState<string | undefined>(undefined);
  const router = useRouter();
  const { setSnackbar } = useSnackbar();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let success = false;
    setSnackbar({ message: "Creating Invoice...", type: "promise" });
    try {
      const formData = new FormData(event.currentTarget);
      const url = random ? "/api/invoices/?random=true" : "/api/invoices";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "content-type": "application/json",
        },
      });
      const result = await response.json();
      success = result.success;
      if (result.success == false) {
        const message = result.message ?? "Some Unknown Error Occurred";
        setError(message);
        setSnackbar({ message, type: "failure" });
      }
    } catch (err) {
      console.error(err);
    }
    if (success) {
      setSnackbar({ message: "Invoice Created", type: "success" });
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
      {random && random == "true" ? (
        <h1 className=" text-2xl font-semibold">Random Invoice Creation</h1>
      ) : (
        <>
          <h1 className=" text-2xl font-semibold">Manual Invoice Creation</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="amount">Amount</label>
            <Input type="number" name="amount" placeholder="Invoice Amount" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="dueDate">Invoice Due Date</label>
            <Input type="date" name="dueDate" />
          </div>
        </>
      )}
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
