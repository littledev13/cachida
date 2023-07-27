import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CachidaTitle from "../Components/CachidaTitle";
import NavLink from "@/Components/NavLink";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cachida - Bantu kamu jago AI profesional sekali klik🔥",
  description: "Bantu kamu jago AI profesional sekali klik🔥",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-rose-50">
          <nav className="mx-auto max-w-[1156px] flex flex-row justify-between items-center">
            <div className="title h-7 w-24">
              <CachidaTitle />
            </div>
            <NavLink />
          </nav>
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
