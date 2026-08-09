import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Aniket | Systems AI Engineer",
  description: "AI/ML engineer building intelligent systems across LLMs, RAG, computer vision, OCR, backend APIs, and deployment.",
  openGraph: {
    title: "Aniket | Systems AI Engineer",
    description: "AI/ML engineer building intelligent systems across LLMs, RAG, computer vision, OCR, backend APIs, and deployment.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket | Systems AI Engineer",
    description: "AI/ML engineer building intelligent systems across LLMs, RAG, computer vision, OCR, backend APIs, and deployment.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen font-sans antialiased bg-[#0a0a0b] text-[#f0ece5]">
        {children}
      </body>
    </html>
  );
}
