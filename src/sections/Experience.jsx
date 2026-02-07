import { cv } from "../data/cv";

function Experience() {
  return (
    <section>
      <h2>Experiencia Profesional</h2>

      <div className="timeline">
        {cv.experience.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{job.period}</div>

            <div className="timeline-content">
              <h3>{job.role}</h3>
              <strong>{job.company}</strong>
              <ul>
                {job.activities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

