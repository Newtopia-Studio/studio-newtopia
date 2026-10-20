export default function Equipo() {
  const equipo = [
    "Blexx",
    "BryLang", 
    "Evan", 
    "Hyuna", 
    "LenVainilla", 
    "Loki",
    "Mirko",
    "Ness",
    "Sam",
    "Skull",
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
