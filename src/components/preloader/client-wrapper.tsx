"use client";

import React from "react";

import Preloader from "./index";

export default function PreloaderClientWrapper({ children }: { children: React.ReactNode }) {
  return <Preloader>{children}</Preloader>;
}
