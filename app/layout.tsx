import ActiveSectionContext from "@/context/active-section-context";
import Header from "./components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/footer";

const inter = Inter({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Benedek - Portfolio",
  description: "I am a junior front-end web developer!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 overflow-x-hidden`}
      >
        <div className="bg-red-50 absolute top-[-6rem] md:right-[0rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"></div>
        <div className="bg-blue-100 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContext>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContext>
      </body>
    </html>
  );
}
