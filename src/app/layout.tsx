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
  title: "Launch a Professional Website Without an Expensive Hosting | BestBeny Digital",
  description:
    "You want a website for your business. Paying for hosting every year is hard. We build your website with AI, host it for free, and hand it over ready to use. No big bills. No confusion.",
  keywords: [
    "AI website design",
    "AI website builder",
    "free hosting website",
    "affordable website design",
    "no expensive hosting",
    "free subdomain website",
    "web design",
    "branding",
    "digital marketing",
    "BestBeny Digital",
  ],
  authors: [{ name: "BestBeny Digital" }],
  creator: "BestBeny Digital",
  metadataBase: new URL("https://bestbenydigitalbrand.space-z.ai"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Launch a Professional Website Without an Expensive Hosting",
    description:
      "We build your website with AI, host it for free, and hand it over ready to use. No big bills. No confusion.",
    url: "https://bestbenydigitalbrand.space-z.ai",
    siteName: "BestBeny Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch a Professional Website Without an Expensive Hosting",
    description: "AI-built website, hosted for free. No big bills. No confusion.",
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
