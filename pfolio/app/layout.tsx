import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
