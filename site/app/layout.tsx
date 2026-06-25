import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incubator Baguio",
  description:
    "Incubator Baguio brings together entrepreneurs, researchers, students, government agencies, businesses, and academic institutions to transform ideas into solutions that create economic, social, and technological impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=general-sans@400,500,600,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
