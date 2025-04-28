import { outfit, sfProDisplay, } from '@/styles/fonts/fonts';
import type { Metadata, Viewport } from 'next';
import React from 'react';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Bloomers Commerce',
  description: 'For parents; by parents;',
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <body
        className={`${outfit.variable} ${sfProDisplay.variable}  scrollbar-none font-sf antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
