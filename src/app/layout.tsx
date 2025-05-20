import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import React from "react";

import EasterEggs from "@/components/easter-eggs";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Particles from "@/components/Particles";
import Preloader from "@/components/preloader";
import RemoteCursors from "@/components/realtime/remote-cursors";
import { ThemeProvider } from "@/components/theme-provider";
import ElasticCursor from "@/components/ui/ElasticCursor";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { config } from "@/data/config";


export const metadata: Metadata = {
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[archivoBlack.className].join(" ")}>
      <head>
        <Script
          defer
          src={process.env.UMAMI_DOMAIN}
          data-website-id={process.env.UMAMI_SITE_ID}
        ></Script>
        {/* <Analytics /> */}
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Particles
            className="fixed inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          <Preloader>
              <RemoteCursors />
              <TooltipProvider>
                <Header />
                {children}
                <Footer />
              </TooltipProvider>
            <Toaster />
            <EasterEggs />
            <ElasticCursor />
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}