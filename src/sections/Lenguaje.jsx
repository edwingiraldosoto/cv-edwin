import { cv } from "../data/cv";

function Lenguaje() {
  return (
    <section style={{ marginTop: "3rem" }}>
      <h2>Idiomas</h2>

      <ul>
        {cv.Lenguaje.map((leng, index) => (
          <li key={index}>{leng}</li>
        ))}
      </ul>
    </section>
  );
}

export default Lenguaje;
