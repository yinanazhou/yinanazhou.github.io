import './globals.css';
import { Noto_Sans, Courier_Prime } from 'next/font/google';

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
});
const courier_prime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-courier-prime',
});

export const metadata = {
  title: 'Ana Zhou',
  description: 'Personal Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${courier_prime.variable}`}>{children}</body>
    </html>
  );
}
