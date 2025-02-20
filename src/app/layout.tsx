import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/basic/Header';
import Footer from './components/basic/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dummy Product Data API | Development Resources',
  description:
    'Access AI-generated product data for your development projects. Features REST API endpoints with plans for GraphQL support.',
  keywords: ['API', 'dummy data', 'product data', 'development resources'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
