import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <div className="flex h-screen md:items-start flex-col xl:w-[60%]
        md:mt-[10%] md:ml-[15%]
        items-start m-[10%]">
          {children}
        </div>

        
      </body>
    </html>
  );
}
