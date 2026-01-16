'use client';
import { useState } from 'react';
import { add, sub } from '../../lib/bank';

export default function Blackjack() {
  const [msg, setMsg] = useState('Place a bet');
  const bet = 50;

  function play() {
    sub(bet);
    const player = 12 + Math.floor(Math.random() * 10);
    const dealer = 16 + Math.floor(Math.random() * 7);

    if (player > 21 || dealer > player) setMsg('Lost');
    else if (player === dealer) { add(bet); setMsg('Push'); }
    else { add(bet * 2); setMsg('Win'); }
  }

  return (
    <div className="card">
      <h2>Blackjack (Demo)</h2>
      <button className="btn" onClick={play}>Play 50</button>
      <p>{msg}</p>
    </div>
  );
}
