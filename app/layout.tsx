import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drew Sepeczi | AI & Software Engineer",
  description: "Portfolio of Drew Sepeczi - Software Developer and AI Researcher specializing in building intelligent systems and scalable applications.",
  keywords: ["Drew Sepeczi", "AI Research", "Machine Learning", "Software Engineering", "Portfolio", "Full-Stack Development", "Artificial Intelligence"],
  authors: [{ name: 'Drew Sepeczi' }],
  creator: 'Drew Sepeczi',
  publisher: 'Drew Sepeczi',
  openGraph: {
    title: 'Drew Sepeczi | AI & Software Engineer',
    description: 'Portfolio of Drew Sepeczi - Software Developer and AI Researcher specializing in building intelligent systems and scalable applications.',
    url: 'https://drewsepeczi.com',
    siteName: 'Drew Sepeczi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drew Sepeczi | AI & Software Engineer',
    description: 'Portfolio of Drew Sepeczi - Software Developer and AI Researcher',
    creator: '@drewsepeczi',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="absolute top-0 left-0 m-3 p-3 bg-gray-800 text-white rounded-lg sr-only focus:not-sr-only"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}