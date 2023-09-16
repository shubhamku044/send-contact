import './globals.css';
import type { Metadata } from 'next';
import { sofiaSans } from './font';

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
