import Gradient from "@/components/gradient";
import Google from "./google";
import Image from "next/image";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="absolute min-w-[614px] min-h-[614px] left-1/2 -translate-x-1/2 top-10">
        <Image alt="Turborepo" height={614} src="circles.svg" width={614} />
      </div>
      <div className="absolute inset-0 z-10 flex min-h-screen flex-col items-center justify-center p-10">
        <form className="relative min-w-[500px] bg-black/50 backdrop-blur-sm gap-5 rounded-lg min-h-[50%] flex items-center justify-center flex-col">
          <h1 className=" text-2xl font-semibold">Login to InvoiceX</h1>
          <Google />
          <div className="flex gap-5 items-center justify-center w-full px-5 absolute bottom-5">
            <a
              href="https://invoice-x-docs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-all duration-300"
            >
              Documentation
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
