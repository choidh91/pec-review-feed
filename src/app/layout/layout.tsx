import React from 'react';
import { Footer } from '@/src/widgets/footer';

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-screen h-screen">
      {children}
      <Footer />
    </main>
  );
};
