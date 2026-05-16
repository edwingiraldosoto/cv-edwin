import { cv } from "../data/cv";

function Lenguaje() {
  return (
    <section>
      <h2>Idiomas</h2>

      <div className="languages-container">
        {cv.Lenguaje.map((idioma, index) => (
          <div key={index} className="language-item">
            <h3>{idioma.language}</h3>
            <span className="language-level">{idioma.level}</span>
            <div className="language-progress-bar">
              <div
                className="language-progress-fill"
                style={{ width: `${idioma.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Lenguaje;
