import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Store Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
