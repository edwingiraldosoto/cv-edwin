import { cv } from "../data/cv";

function Certification() {
  return (
    <section style={{ marginTop: "3rem" }}>
      <h2>CERTIFICACIONES</h2>

      <ul>
        {cv.Certification.map((Certi, index) => (
          <li key={index}>{Certi}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certification;
