import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";

import { Theme, ThemePanel, Container } from "@radix-ui/themes";
import { Inter, Cormorant_Garamond, Sancreek } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorantGaramond = Sancreek({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Mad Tea(se) Party",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <Theme accentColor="amber" radius="full">
          {children}
        </Theme>
      </body>
    </html>
  );
}
