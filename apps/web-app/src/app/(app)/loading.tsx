import { getUser } from "@/lib/server/user";
import Loader from "@components/loader";

export default function Loading() {
  const user = getUser();
  return (
    <div className="grid w-full place-items-center">
      <div className="bg-black/40 p-5 flex flex-col items-center gap-5 rounded-lg">
        <Loader></Loader>
        <p className="text-heading">
          Hey <span className="text-dominant">{user?.name}</span>, Please wait
          while we get your invoices...
        </p>
      </div>
    </div>
  );
}
