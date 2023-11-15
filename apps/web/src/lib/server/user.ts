import { headers } from "next/headers";

export const getUser = () => {
  const user = headers().get("x-next-user");
  if (user) {
    return JSON.parse(user) as {
      name: string;
      email: string;
      picture: string;
    };
  }
  return undefined;
};
