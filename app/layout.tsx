import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { ReactNode } from 'react';

export const metadata = {
  title: "Landing Page",
  description: ".",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" style={ { scrollBehavior: 'smooth' } }>
      <body
        className={ `${GeistSans.variable} ${GeistMono.variable} antialiased mx-auto font-sans` }
      >
        { children }
      </body>
    </html>
  );
}
