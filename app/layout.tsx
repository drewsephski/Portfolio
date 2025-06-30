"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MobileNavbar } from "@/components/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
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
          <MobileNavbar />
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}