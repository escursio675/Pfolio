import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <div className="flex h-screen xl:items-start flex-col xl:w-[60%]
        xl:mt-[10%] xl:ml-[15%]
        items-start m-[10%]">
          {children}
        </div>

        
      </body>
    </html>
  );
}
