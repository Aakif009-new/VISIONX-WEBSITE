import type { Metadata } from "next";
import { Inter, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VisionX | See Beyond. Build the Future.",
    template: "%s | VisionX",
  },
  description:
    "VisionX is a student-led innovation ecosystem that helps students transform ideas into startups through incubation, mentorship, technology, events, and collaboration.",
  keywords: [
    "VisionX",
    "student innovation",
    "startup ecosystem",
    "student entrepreneurship",
    "incubation",
    "hackathon",
    "mentorship",
  ],
  openGraph: {
    title: "VisionX | See Beyond. Build the Future.",
    description:
      "A student-led innovation ecosystem empowering students to transform ideas into startups.",
    type: "website",
    siteName: "VisionX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
