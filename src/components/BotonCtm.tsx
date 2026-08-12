import React from 'react';

interface BotonProps {
  texto: string;
  subtexto?: React.ReactNode;
  url: string;
}

export default function BotonCtm({ texto, subtexto, url }: BotonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {texto} {subtexto}
    </a>
  );
}
