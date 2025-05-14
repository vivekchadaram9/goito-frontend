import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Goito",
  description: "Wear your scenes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF7DC] dark:bg-black`}
      >
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
