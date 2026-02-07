import { cv } from "../data/cv";

function Education() {
  return (
    <section style={{ marginTop: "3rem" }}>
      <h2>EDUCACIÓN</h2>

      <div className="timeline">
        {cv.Education.map((edu, index) => (
          <div className="timeline-item" key={index}>
            {/* La barra de tiempo usará el periodo académico */}
            <div className="timeline-year">{edu.period}</div>

            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <strong>{edu.institution}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;