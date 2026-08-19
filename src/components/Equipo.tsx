export default function Equipo() {
  const equipo = [
    "BryLang", 
    "Damzelette", 
    "Fan", 
    "Grokz",
    "Hyuna", 
    "LenVainilla", 
    "Loki",
    "Mirko",
    "Ness", 
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
