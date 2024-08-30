import type { Metadata } from 'next';
import { Inter as FontSans } from '@next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import { Html } from 'next/document';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Sollet',
  description: 'A Solana Balance Tracker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        {children}
      </body>
    </html>
  )
}

