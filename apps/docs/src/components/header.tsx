import Logo from "@/components/logo";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-screen  fixed bg-dominant top-0 z-[100] border-b border-dominant">
      <div className="max-w-[1000px] mx-auto flex justify-between items-center px-10 py-3 -md:px-2">
        <Logo title={"InvoiceX Documentation"} />
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/NSVEGUR/invoice-x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="github"
              height={20}
              width={20}
              className="invert"
            ></Image>
          </a>
          <a
            href="https://youtu.be/ik9mvGDRZ1o"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
