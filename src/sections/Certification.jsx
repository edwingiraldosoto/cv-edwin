import { cv } from "../data/cv";

function Certification() {
  return (
    <section>
      <h2>Certificaciones</h2>

      <ul className="achievements-list">
        {cv.Certification.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certification;
