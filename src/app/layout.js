import './globals.css';
import { Noto_Sans } from 'next/font/google';

const noto_sans = Noto_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Yinan Zhou',
  description: 'Personal Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className}`}>{children}</body>
    </html>
  );
}
