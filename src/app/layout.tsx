import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import favicon from "../assets/favicon.ico";
import Header from "./components/Header";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "700"],
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartCal",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.variable}`}>  
        <Header />
        {children}
      </body>
    </html>
  );
}
