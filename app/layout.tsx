import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nishant | Portfolio",
  description:
    "Frontend Developer proficient in JavaScript, TypeScript, React, and modern web frameworks. Currently expanding into Web3 development. Discover my projects and professional experience.",
  // key
  authors: [
    {
      name: "Nishant",
      url: "https://x.com/_nishantt19", // You may want to update this URL
    },
  ],
  creator: "Nishant",
  openGraph: {
    type: "website",
    images: [],
  },
  twitter: {},

  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://portfolio.nishant.com", // You may want to update this URL
  //   title: "Nishant | Portfolio",
  //   description:
  //     "Full-stack developer specializing in modern web technologies. View my projects and experience.",
  //   siteName: "Nishant's Portfolio",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} font-sora antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
