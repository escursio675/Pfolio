import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import LenisProvider from "@/components/lenis-provider";

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
    <html lang="en" className={cn(robotoMono.variable, "scroll-smooth")}>
      <head>
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body className="antialiased relative">
        <div
          aria-hidden="true"
          className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#689bec]/20 blur-[120px] pointer-events-none -z-10"
        />
        <LenisProvider>
          <div className="flex flex-col min-h-screen items-start m-[10%] xl:items-start xl:w-[60%] xl:mt-[10%] xl:ml-[15%] xl:max-w-[1000px] xl:mx-auto relative z-0">
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}