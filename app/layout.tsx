import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@/src/app/layout';

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Review feed for Ecommerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
