import type { Metadata } from "next";
import {  Sora } from "next/font/google";
import "./globals.css";
import {Intro} from "@/components/intro";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiva Inu - Utilizing community power in the growing TON DeFi ecosystem.",
  description: "A Proper memecoin." + "Done right.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
      <Intro />
      {children}
      </body>
    </html>
  );
}
