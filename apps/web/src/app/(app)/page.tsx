import Gradient from "@/components/gradient";
import { Link } from "@/components/ui/link";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/create">Create Invoice</Link>
    </main>
  );
}
