import Link from 'next/link';

export default function Page() {
  return (
    <div className="grid">
      <GameCard title="Blackjack" href="/blackjack" />
      <GameCard title="Crash" href="/crash" />
      <GameCard title="Mines" href="/mines" />
      <GameCard title="Dice" href="/dice" />
      <GameCard title="Cases" href="/cases" />
      <GameCard title="Upgrader" href="/upgrader" />
      <GameCard title="Crossroad" href="/crossroad" />
    </div>
  );
}

function GameCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="card">
      <h3>{title}</h3>
      <p className="small">Simulator • Fake Rocoins</p>
    </Link>
  );
}
