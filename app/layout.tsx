import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";

import { Theme, ThemePanel, Container } from "@radix-ui/themes";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
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
          {children} <ThemePanel />
        </Theme>
      </body>
    </html>
  );
}
