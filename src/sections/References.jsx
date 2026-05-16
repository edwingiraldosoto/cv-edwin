import { cv } from "../data/cv";

function References() {
  return (
    <section>
      <h2>Referencias Profesionales</h2>
      <p className="references-subtitle">
        Profesionales que pueden avalar mi experiencia y competencias técnicas.
      </p>

      <div className="references-container">
        {cv.references.map((ref, index) => (
          <div className="reference-card" key={index}>
            <div className="reference-avatar">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="reference-content">
              <h3>{ref.name}</h3>
              <p className="reference-role">
                <i className="fa-solid fa-briefcase"></i> {ref.role}
              </p>
              <p className="reference-company">
                <i className="fa-solid fa-building"></i> {ref.company}
              </p>
              <a href={`tel:${ref.phone}`} className="reference-phone">
                <i className="fa-solid fa-phone"></i> {ref.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default References;
