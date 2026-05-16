import { cv } from "../data/cv";

function Skills() {
  return (
    <section>
      <h2>Competencias Técnicas</h2>
      <ul className="skills-justified-list">
        {cv.skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.label}:</strong>{skill.value}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;