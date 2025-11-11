import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remylar | Workflow Intelligence for Enterprise AI",
  description:
    "Remylar turns enterprise data into operational intelligence with adaptive AI infrastructure and workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#04050c]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#04050c] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
