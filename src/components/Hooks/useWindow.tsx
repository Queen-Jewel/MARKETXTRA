"use client";

import { useEffect, useState } from "react";
// components/WindowWrapper.tsx

import { ReactNode } from "react";

export function WindowWrapper({ children }: { children?: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}

export default function useWindow() {
  const [windowObj, setWindowObj] = useState<Window | undefined>(undefined);

  useEffect(() => {
    setWindowObj(window);
  }, []);

  return windowObj;
}
