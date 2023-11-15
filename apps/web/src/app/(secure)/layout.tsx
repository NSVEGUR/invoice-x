import Header from "@components/marginals/header";
import Footer from "@components/marginals/footer";
import { getUser } from "@/lib/server/user";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const user = getUser();
  return (
    <>
      <Header picture={user?.picture} />
      {children}
      <Footer />
    </>
  );
}
