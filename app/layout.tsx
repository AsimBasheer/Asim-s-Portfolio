import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asim-porfolio.web.app/"), // replace with your actual domain

  title: {
    default: "Asim Bashir | Senior React Native Engineer for Booking & On-Demand Apps",
    template: "%s | Asim Bashir",
  },

  description:
    "Senior React Native Engineer with 6+ years of experience helping startups build production-ready booking, on-demand, and marketplace mobile apps. Live projects on the App Store & Google Play.",

  keywords: [
    "React Native Developer",
    "Senior React Native Engineer",
    "Mobile App Developer for Startups",
    "Booking App Developer",
    "On-Demand App Developer",
    "Marketplace App Development",
    "React Native Freelancer",
    "Node.js Developer",
    "TypeScript Mobile Developer",
    "Firebase App Developer",
    "iOS and Android App Developer",
    "Asim Bashir",
  ],

  authors: [{ name: "Asim Bashir", url: "https://asim-porfolio.web.app/" }],
  creator: "Asim Bashir",
  publisher: "Asim Bashir",

  icons: {
    icon: "/linkedProfile.png",
  },

  openGraph: {
    type: "website",
    url: "https://asim-porfolio.web.app/",
    title: "Asim Bashir | Senior React Native Engineer for Booking & On-Demand Apps",
    description:
      "Helping startups build production-ready booking, on-demand, and marketplace mobile apps — from planning to App Store & Play Store deployment.",
    siteName: "Asim Bashir",
    images: [
      {
        url: "/linkedProfile.png", // create a 1200x630 image for link previews
        width: 1200,
        height: 630,
        alt: "Asim Bashir - Senior React Native Engineer",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Asim Bashir | Senior React Native Engineer",
    description:
      "Helping startups build booking, on-demand, and marketplace mobile apps that scale.",
    images: ["/linkedProfile.png"],
    // creator: "@yourtwitterhandle", // uncomment and add if you have one
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://asim-porfolio.web.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
