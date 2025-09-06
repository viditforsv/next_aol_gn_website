import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Art of Living - Great Noida Chapter",
  description: "Join the Art of Living Great Noida Chapter for meditation, yoga, breathing techniques, and community service programs.",
  keywords: ["Art of Living", "Great Noida", "meditation", "yoga", "breathing techniques", "spiritual growth", "community service"],
  authors: [{ name: "Art of Living Great Noida Chapter" }],
  creator: "Art of Living Great Noida Chapter",
  publisher: "Art of Living Great Noida Chapter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aol-greatnoida.vercel.app'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Art of Living - Great Noida Chapter",
    description: "Join the Art of Living Great Noida Chapter for meditation, yoga, breathing techniques, and community service programs.",
    url: 'https://aol-greatnoida.vercel.app', // Update with your actual domain
    siteName: 'Art of Living Great Noida',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Art of Living - Great Noida Chapter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Art of Living - Great Noida Chapter",
    description: "Join the Art of Living Great Noida Chapter for meditation, yoga, breathing techniques, and community service programs.",
    images: ['/opengraph-image'],
    creator: '@aol_greatnoida', // Update with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
