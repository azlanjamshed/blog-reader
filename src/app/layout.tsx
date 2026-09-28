import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paper Journal · Thoughtful stories for curious people",
  description:
    "An independent digital publication devoted to unhurried reading, craftsmanship, software architecture, and deliberate design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
        {children}
      </body>
    </html>
  );
}
