import Google from "./google";

export default function Page(): JSX.Element {
  return (
    <form className="min-w-[500px] bg-black/50 backdrop-blur-sm gap-5 rounded-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 min-h-[50%] flex items-center justify-center flex-col">
      <h1 className=" text-2xl font-semibold">Login to InvoiceX</h1>
      <Google />
    </form>
  );
}
