import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import '../styles/globals.css';
import Footer from '@/components/footer';
import AppWalletProvider from '@/components/app-wallet-provider';

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
        <AppWalletProvider>
          <Navbar />
          <section className="min-h-[calc(100vh-3.5rem-5rem)] overflow-auto">
            {children}
          </section>
          <Footer />
        </AppWalletProvider>
      </body>
    </html>
  );
}
