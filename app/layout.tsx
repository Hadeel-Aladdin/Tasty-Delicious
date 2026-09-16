import type { Metadata } from "next";
import Providers from "./providers";
//import { montez, moonDance, zain, arefRuqaa } from "./font";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tasty & Delicious",
  description: "For all burger lovers… you’ve come to the right place! We don’t just make burgers; we deliver a premium, ready-to-cook experience made with pure love and real quality.  We pick natural, high-quality ingredients so you get that authentic homemade flavor crafted with big-restaurant standards. No more waiting around for takeout—we deliver fresh, ready-to-cook burgers straight to your door. Fresh, hot, fast, and affordable.  Restaurant quality. Homemade taste. Delivered to you. Try it once and taste the difference!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth`}
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
