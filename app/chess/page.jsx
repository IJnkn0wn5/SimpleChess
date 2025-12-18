'use client';

import dynamic from 'next/dynamic';

// динамически импортируем компонент шахмат и выключаем SSR
const SimpleChess = dynamic(
  () => import('../components/SimpleChessComponent'),
  { ssr: false }
);

export default function ChessPage() {
  return (
    <div style={{ padding: 20 }}>
      <SimpleChess />
    </div>
  );
}
