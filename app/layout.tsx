import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/header"
import { Holtwood_One_SC } from 'next/font/google'
import Footer from "@/app/footer"

const holtwood = Holtwood_One_SC({
  weight: '400',
  style: ['normal']
})

export const metadata: Metadata = {
  title: "Simple Chess",
  description: "chess guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header>
          <Header />
        </header>
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
          <Footer />
      </body>
    </html>
  );
}
