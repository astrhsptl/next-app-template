import type { Metadata } from 'next';
import { FC, ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Page',
  description: 'First page',
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
