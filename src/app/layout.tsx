import type { Metadata } from "next";
import CustomFont from "next/font/local";
import "./globals.css";

const sfPro = CustomFont({
  src: "../../public/fonts/SF-Pro.ttf",

  variable: "--font-SfPro",
});

export const metadata: Metadata = {
  title: "Munchies",
  description: "Web test for UMAIN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfPro.variable} antialiased bg-white px-6 pt-10`}>
        {children}
      </body>
    </html>
  );
}
