export default function Equipo() {
  const equipo = [
    "BryLang", 
    "Evan", 
    "Hyuna", 
    "LenVainilla", 
    "Loki",
    "Mirko",
    "MiseriSixSeven",
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
