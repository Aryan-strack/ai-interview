import type { Metadata } from "next";
import {Mona_Sans, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const monaSans = Mona_Sans({
  variable: "--font-monasans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prepwise AI Interview",
  description: "An AI-powered interview preparation platform that provides personalized feedback and practice questions to help users ace their interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", "h-full", "antialiased", monaSans.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
