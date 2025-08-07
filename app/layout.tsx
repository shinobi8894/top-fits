import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import "./typography.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Fits",
  description: "Top Fits Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
