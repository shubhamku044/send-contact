import './globals.css';
import type { Metadata } from 'next';
import { Sofia_Sans } from 'next/font/google';

const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Send Contact',
  description: 'Send contact landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sofiaSans.className}>{children}</body>
    </html>
  );
}
