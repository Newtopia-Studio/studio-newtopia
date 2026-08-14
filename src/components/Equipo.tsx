export default function Equipo() {
  const equipo = [
    "BryLang", 
    "Damzelette", 
    "Fan", 
    "Hyuna", 
    "LenVainilla", 
    "Loki", 
    "Ness", 
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
