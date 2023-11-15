import Gradient from "@components/gradient";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute z-50 flex items-center justify-center w-64 h-64">
        <Gradient className="opacity-90 w-[120px] h-[120px]" conic small />
      </div>
      {children}
      <Gradient
        className="top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
        conic
      />
    </main>
  );
}
