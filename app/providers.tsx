"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}

export default Providers;