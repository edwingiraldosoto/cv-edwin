import { cv } from "../data/cv";

function Achievements() {
  return (
    <section style={{ marginTop: "3rem" }}>
      <h2>Logros Destacados</h2>

      <ul className="achievements-list">
        {cv.Achievements.map((logro, index) => (
          <li key={index}>{logro}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;