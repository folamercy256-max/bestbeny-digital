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
  title: "Launch a Professional Website Without an Expensive Domain | BestBeny Digital",
  description:
    "Get a clean, fast, AI-built website for your business — hosted on a free subdomain so you can launch without the yearly cost of a custom domain. Design, copy, hosting and launch handled for you by BestBeny Digital.",
  keywords: [
    "AI website design",
    "AI website builder",
    "free subdomain website",
    "affordable website design",
    "no expensive domain",
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
    title: "Launch a Professional Website Without an Expensive Domain",
    description:
      "AI-built websites hosted on a free subdomain — launch without the yearly cost of a custom domain. Upgrade later, only when you are ready.",
    url: "https://bestbenydigitalbrand.space-z.ai",
    siteName: "BestBeny Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch a Professional Website Without an Expensive Domain",
    description: "AI-built websites on a free subdomain. Launch fast, pay nothing for hosting.",
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
