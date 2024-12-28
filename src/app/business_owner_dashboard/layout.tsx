"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/BusinessOwnerDashboard/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);
  const path = usePathname();
  const array = path.split("/");
  const page = array[array.length - 1];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-screen">
      <Sidebar page={page} />
      <div
        className={`lg:~lg/fxl:~ml-[189.8666px]/[267px] ml-0 ${
          page === "my-store" ? "" : ""
        } `}
      >
        {children}
      </div>
    </div>
  );
}
