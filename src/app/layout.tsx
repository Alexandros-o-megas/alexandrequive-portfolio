import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexandre Quive | Software Developer",
  description:
    "Portfólio de Alexandre Quive — desenvolvimento web, backend e soluções de software.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
