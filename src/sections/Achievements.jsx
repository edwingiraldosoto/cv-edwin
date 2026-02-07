import { cv } from "../data/cv";

function Achievements() {
  return (
    <section style={{ marginTop: "3rem" }}>
      <h2>LOGROS DESTACADOS</h2>

      <ul>
        {cv.Achievements.map((logro, index) => (
           <li key={index}>{logro}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;