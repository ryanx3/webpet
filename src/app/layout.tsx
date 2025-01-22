
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Providers } from "../providers/provider";


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "RXdev.js",
  description: "Portfólio of Ryan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background`}
      >
        <Providers>
          <Header />
          <main className="max-w-6xl mx-auto py-32 px-6">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
