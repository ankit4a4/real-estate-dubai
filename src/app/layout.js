import {  Outfit, Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/storeProvider";


const geistSans = Outfit({
  variable: "--font-Outfit",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "MOHAMMAD & SABA",
  description: "Build by Moveexa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
        
        {children}
        </StoreProvider>
      </body>
    </html>
  );
}
