import type { Metadata } from "next";
import { Abril_Fatface, Nunito, Mulish } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // 支持多个字重
  variable: "--font-nunito",
  display: "swap",
});

const muli = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | Leon's Portfolio`,
    default: `Leon's Portfolio`,
  },
  description: "This a portfolio website for Leon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${abril.variable} ${nunito.variable} ${muli.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
