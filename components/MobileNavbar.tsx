"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component or will add it
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import { FloatingNav } from "@/components/ui/FloatingNav";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

const navItems: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div>
        <FloatingNav navItems={navItems} isMobileNavOpen={isOpen} />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-[5000]">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-black/20 backdrop-blur-sm border-white/[0.2] text-white"
              aria-label="Open navigation menu"
              tabIndex={0}
            >
              <FiMenu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-black border-neutral-800 text-white p-6 flex flex-col">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={cn(
                    "text-lg font-medium text-neutral-300 hover:text-purple-500 transition-colors duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md p-2" // Accessibility
                  )}
                  onClick={handleLinkClick}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleLinkClick();
                    }
                  }}
                  tabIndex={0}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
} 