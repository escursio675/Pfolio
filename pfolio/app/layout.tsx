import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhimanyu Saikia",
  description: "Portfolio website for someone who really likes computers",
};

const robotoMono = localFont({
  src: "../fonts/RobotoMono-Regular.ttf",
  variable: "--font-roboto-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(robotoMono.variable)}>
      <head>
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body>
        <div
          className="flex flex-col h-screen items-start m-[10%] xl:items-start xl:w-[60%] xl:mt-[10%] xl:ml-[15%]">
          {children}
        </div>
      </body>
    </html>
  );
}