import { getUser } from "@/lib/server/user";
import Form from "./form";

export default function Page() {
  const user = getUser();
  if (!user) {
    return <h1>Some Unknown Error Occurred</h1>;
  }
  return <Form />;
}
