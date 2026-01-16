export function getBal() { return Number(localStorage.getItem('rocoins') || '0'); }
export function setBal(v: number) { localStorage.setItem('rocoins', String(v)); window.dispatchEvent(new Event('rocoins')); }
export function add(v: number) { setBal(getBal() + v); }
export function sub(v: number) { setBal(Math.max(0, getBal() - v)); }
