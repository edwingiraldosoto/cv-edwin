import { cv } from "../data/cv";

function Profile() {
  const modalities = cv.modality.split(" / ").map(m => m.trim());

  return (
    <section>
      <h1>{cv.name}</h1>
      <h2>{cv.title}</h2>
      <div className="profile-container">
        <p className="profile-description">
          {cv.SkillsHeader}
        </p>
      </div>
      <p>{cv.location}</p>
      <p>
        <a href={`mailto:${cv.Mail}`} className="profile-link">
          {cv.Mail}
        </a>
      </p>
      <div className="modality-badges">
        {modalities.map((mode, index) => (
          <span className="modality-badge" key={index}>{mode}</span>
        ))}
      </div>
      <div className="profile-container">
        <p className="profile-description">
          {cv.profile}
        </p>
      </div>
    </section>
  );
}

export default Profile;


