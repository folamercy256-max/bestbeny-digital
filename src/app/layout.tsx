import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BestBeny Digital | AI Website Design for Modern Businesses",
  description:
    "BestBeny Digital designs AI-built websites and digital experiences that look professional, communicate clearly and make it easy for customers to choose you.",
  keywords: [
    "AI website design",
    "AI website builder",
    "web design",
    "branding",
    "digital marketing",
    "BestBeny Digital",
    "website design",
  ],
  authors: [{ name: "BestBeny Digital" }],
  creator: "BestBeny Digital",
  metadataBase: new URL("https://bestbenydigitalbrand.space-z.ai"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "BestBeny Digital | AI Website Design",
    description:
      "AI-powered websites and digital experiences that make it easier for customers to choose you.",
    url: "https://bestbenydigitalbrand.space-z.ai",
    siteName: "BestBeny Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestBeny Digital",
    description: "AI website design that moves your business forward.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-paper text-ink`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
