import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abhimanyu Saikia",
  description: "Portfolio website for someone who really likes computers",
};

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body>
        
        <div className="flex flex-col
        h-screen xl:items-start xl:w-[60%]
        xl:mt-[10%] xl:ml-[15%]
        items-start m-[10%]">
          {children}
        </div>

        
      </body>
    </html>
  );
}
