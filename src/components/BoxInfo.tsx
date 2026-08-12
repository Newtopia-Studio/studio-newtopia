import React from 'react';

interface BoxInfoProps {
  titulo?: string;
  children: React.ReactNode;
}

export default function BoxInfo({ titulo, children }: BoxInfoProps) {
  return (
    <aside className="caja-informacion">
      {titulo && <h3 className="caja-titulo">{titulo}</h3>}
      <div className="caja-contenido">
        {children}
      </div>
    </aside>
  );
}
