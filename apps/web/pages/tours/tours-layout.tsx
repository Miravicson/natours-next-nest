import { PropsWithChildren } from 'react';
import { ToursHeader } from './tours-header';

export function ToursLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <ToursHeader />
      <main>{children}</main>
    </div>
  );
}
