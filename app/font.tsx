import {Montez, Zain, Aref_Ruqaa } from "next/font/google";

export const zain = Zain({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
  variable: "--font-zain",
});

export const aref = Aref_Ruqaa({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-aref",
});

export const montez = Montez({
    weight: '400',
    subsets: ['latin'],
    variable: "--font-montez",
});
