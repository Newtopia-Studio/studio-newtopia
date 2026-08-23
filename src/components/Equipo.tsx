export default function Equipo() {
  const equipo = [
    "Blexx",
    "BryLang", 
    "Damzelette", 
    "Fan", 
    "Grokz",
    "Hyuna", 
    "LenVainilla", 
    "Loki",
    "Marialin",
    "Mirko",
    "MiseriSixSeven",
    "Ness",
    "Skull",
    "Sinyo",
    "Yam",
    "Yuko"
  ]

  return (
    <ul>
      {equipo.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
}
