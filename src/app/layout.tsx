import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Godfather | AI Command Dashboard",
  description:
    "The Digital Godfather — an AI-powered command center. Make decisions your competition can't refuse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
