import { Nunito } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Smile Kids - PAUD & Penitipan Anak Ceria',
  description: 'Smile Kids adalah tempat bermain dan belajar yang menyenangkan, aman, dan penuh kasih sayang untuk anak-anak usia dini.',
  keywords: ['PAUD', 'penitipan anak', 'daycare', 'pendidikan anak usia dini', 'taman kanak-kanak', 'SMILE KIDS', 'anak ceria'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${nunito.variable} antialiased`}>
      <body className="bg-brand-background">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 