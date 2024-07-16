
import '@/app/ui/global.css';
import * as fontType from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontType.inter.className} antialiased`}>{children}</body>
    </html>
  );
}
