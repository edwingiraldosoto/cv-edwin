import { cv } from "../data/cv";

function Sectors() {
  return (
    <section>
      <h2>Sectores de Experiencia</h2>
      <div className="sectors-container">
        {cv.sectors.map((sector, index) => (
          <div className="sector-card" key={index}>
            <h3>{sector.name}</h3>
            <p>{sector.companies}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sectors;
