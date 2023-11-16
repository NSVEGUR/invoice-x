"use client";

import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { useState } from "react";
import { useSnackbar } from "@components/snackbar/snackbar.provider";

export default function Form({ email }: { email: string }) {
  const { setSnackbar } = useSnackbar();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      formData.append("email", email);
      const response = await fetch("/api/send?random=true", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();
      if (!result.id) {
        setSnackbar({
          message: result.message ?? "Some Unknown Error Occurred",
          type: "failure",
        });
      } else {
        setSnackbar({
          message: "Successfully Generated Invoice",
          type: "success",
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <Button
        type="submit"
        intent="accent"
        className="h-8 min-w-[0] text-sm w-full"
      >
        Generate Random Invoice &#10023;
      </Button>
    </form>
  );
}
