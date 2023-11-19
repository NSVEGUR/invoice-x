import Image from "next/image";

export default function Logo({ title }: { title?: string }) {
  return (
    <a className="flex gap-2 items-center" href="/">
      <Image src="/turborepo.svg" width={35} height={35} alt="logo" />
      <h1 className="font-bold text-lg">{title ? title : "InvoiceX"}</h1>
    </a>
  );
}
