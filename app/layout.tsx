import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//import { montez, moonDance, zain, arefRuqaa } from "./font";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tasty & Delicious",
  description: "For all burger lovers… you’ve come to the right place! We don’t just make burgers; we deliver a premium, ready-to-cook experience made with pure love and real quality.  We pick natural, high-quality ingredients so you get that authentic homemade flavor crafted with big-restaurant standards. No more waiting around for takeout—we deliver fresh, ready-to-cook burgers straight to your door. Fresh, hot, fast, and affordable.  Restaurant quality. Homemade taste. Delivered to you. Try it once and taste the difference!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
