import type { Metadata } from 'next';
import '@picocss/pico/css/pico.classless.pumpkin.min.css';
import Navigation from '../components/Navigation';
import DynamicUserbar from '@/components/DynamicUserbar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DynamicUserbar />
        <Navigation />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
