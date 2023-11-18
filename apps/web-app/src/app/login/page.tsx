import Gradient from "@/components/gradient";
import Google from "./google";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-[100vw] overflow-x-hidden">
      <div className="absolute z-10 flex items-center justify-center w-64 h-64">
        <Gradient className="opacity-90 w-[120px] h-[120px]" conic small />
      </div>
      <div className="absolute inset-0 z-10 flex min-h-screen flex-col items-center justify-center p-10">
        <form className="min-w-[500px] bg-black/50 backdrop-blur-sm gap-5 rounded-lg min-h-[50%] flex items-center justify-center flex-col">
          <h1 className=" text-2xl font-semibold">Login to InvoiceX</h1>
          <Google />
        </form>
      </div>
      <div className="absolute flex items-center justify-center">
        <Gradient
          className="absolute top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
          conic
        />
      </div>
    </main>
  );
}
