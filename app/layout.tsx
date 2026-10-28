import type { Metadata } from "next";
import Providers from "./providers";
import { zain, aref, montez } from "./font";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tasty & Delicious",
  description: "Tasty & Delicious: بوكسات برجر فريش جاهزة للتسوية، بمكونات طبيعية وجودة مطاعم وطعم بيتي، وبتوصلك لحد باب البيت.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      className={`h-full antialiased scroll-smooth ${zain.variable} ${montez.variable} ${aref.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
