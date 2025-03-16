// src/app/layout.tsx
"use client"; // This marks the component as a Client Component

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Import usePathname hook to get the current path
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();  // Get the current path

  // Add a conditional class based on the path
  const bodyClass = pathname === "/" ? "home-page" : "";

  return (
    <html lang="en">
      <body className={`${inter.className} ${bodyClass}`}>{children}</body>
    </html>
  );
}
