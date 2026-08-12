import React from 'react';

interface EnlaceProps {
  texto: string;
  subtexto?: React.ReactNode;
  url: string;
}

export default function EnlaceCtm({ texto, subtexto, url }: EnlaceProps) {
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
