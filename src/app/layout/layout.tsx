import React from 'react';
import { Footer } from '@/widgets/footer';

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="w-screen h-screen">{children}</main> <Footer />
    </>
  );
};
