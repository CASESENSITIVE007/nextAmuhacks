import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import localFont from 'next/font/local'; 

const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/Pixel Digivolve.otf',
      weight: '400',  // Adjust based on font variations
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-myfont'
});



export const metadata: Metadata = {
  title: "AMU HACKS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"  >
      <body
        className={`${myFont.className}  antialiased `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
