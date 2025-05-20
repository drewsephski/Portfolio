import Link from "next/link";
import React from "react";

import { config } from "@/data/config";

import SocialMediaButtons from "../social/social-media-icons";
import { Button } from "../ui/button";

import { footer } from "./config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © {year} {config.author}. All rights reserved.
      </p>
      <SocialMediaButtons />
      <nav className="flex gap-4 sm:gap-6 z-10">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
