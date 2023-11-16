import { headers } from "next/headers";
import { User } from "@lib/types";

export const getUser = () => {
  const user = headers().get("x-next-user");
  if (user) {
    return JSON.parse(user) as User;
  }
  return undefined;
};
