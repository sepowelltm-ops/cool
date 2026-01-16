import './globals.css';
import Balance from '@/components/Balance';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="brand">ROCOINS</div>
          <Balance />
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
