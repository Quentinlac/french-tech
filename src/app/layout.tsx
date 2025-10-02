import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "French Innovation Club Croatia | Connecting Tech Ecosystems",
  description: "French Innovation Club Croatia connects French and Croatian tech ecosystems through events, community, and opportunities. Join founders and investors building the future.",
  keywords: "French Tech, Croatian Tech, Startups, Innovation, Zagreb, Paris, Ecosystem, Entrepreneurship",
  authors: [{ name: "French Innovation Club Croatia" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "French Innovation Club Croatia",
    description: "Connecting French and Croatian tech ecosystems",
    url: "https://frenchinnovationclub.com",
    siteName: "FIC Croatia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
