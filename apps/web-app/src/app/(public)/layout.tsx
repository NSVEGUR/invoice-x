import Gradient from "@/components/gradient";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center w-screen">
      <div className="absolute z-10 flex items-center justify-center w-64 h-64">
        <Gradient className="opacity-90 w-[120px] h-[120px]" conic small />
      </div>
      <section className="absolute inset-0 z-10 min-h-screen p-10 pt-20 -md:px-3 max-w-[1000px] mx-auto leading-8">
        {children}
      </section>
      <div className="absolute flex items-center justify-center">
        <Gradient
          className="absolute top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
          conic
        />
      </div>
    </main>
  );
}
