import React from 'react';
import { HomeHeader } from './home-header';
export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeHeader />
      <main className="py-3">{children}</main>
    </>
  );
}
