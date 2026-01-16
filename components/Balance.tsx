'use client';
import { useEffect, useState } from 'react';

export default function Balance() {
  const [bal, setBal] = useState(0);

  useEffect(() => {
    const b = Number(localStorage.getItem('rocoins') || '1000');
    localStorage.setItem('rocoins', String(b));
    setBal(b);
    const on = () => setBal(Number(localStorage.getItem('rocoins') || '0'));
    window.addEventListener('rocoins', on);
    return () => window.removeEventListener('rocoins', on);
  }, []);

  return <div className="card">Rocoins: <b>{bal}</b></div>;
}
