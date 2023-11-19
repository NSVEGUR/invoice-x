import Header from "@components/marginals/header";
import Footer from "@components/marginals/footer";
import { getUser } from "@/lib/server/user";
import Gradient from "@/components/gradient";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const user = getUser();
  return (
    <>
      <Header user={user} />
      <main className="flex min-h-screen flex-col items-center justify-center max-w-[100vw] overflow-x-hidden">
        <div className="absolute z-10 flex items-center justify-center w-64 h-64">
          <Gradient className="opacity-90 w-[120px] h-[120px]" conic small />
        </div>
        <div className="absolute inset-0 z-10 flex min-h-screen flex-col items-center justify-center p-10">
          {children}
        </div>
        <div className="absolute flex items-center justify-center">
          <Gradient
            className="absolute top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
            conic
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
