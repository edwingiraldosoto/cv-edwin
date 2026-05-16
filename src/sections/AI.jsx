import { cv } from "../data/cv";

function AI() {
  return (
    <section>
      <h2>IA & Automatización</h2>

      <div className="ai-intro">
        <p className="profile-description">
          {cv.aiSection.description}
        </p>
        <p className="profile-description">
          <strong>Estudiando activamente:</strong> {cv.aiSection.studying}
        </p>
      </div>

      <div className="ai-programs">
        {cv.aiSection.programs.map((program, index) => (
          <div className="program-badge" key={index}>
            <span className="program-emoji">{program.emoji}</span>
            <div className="program-content">
              <strong>{program.text}:</strong> {program.highlight}
              {program.detail && <span> - {program.detail}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="ai-cards">
        {cv.ai.map((item, index) => (
          <div className="ai-card" key={index}>
            <div className="ai-card-header">
              <h3>{item.title}</h3>
            </div>
            <p className="ai-description">{item.description}</p>
            <div className="ai-skills">
              {item.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AI;
