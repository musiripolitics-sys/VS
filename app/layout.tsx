import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VA Studios – Creative & Digital Marketing Agency",
  description:
    "Virtual Alliance Studios – A creative and digital marketing agency. Creators, Storytellers and Innovators committed to elevating your brand in the digital space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
