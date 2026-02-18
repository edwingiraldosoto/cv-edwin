import { cv } from "../data/cv";

function Profile() {
  return (
    <section>
      <h1>{cv.name}</h1>
      <h2>{cv.title}</h2>
      <p>{cv.SkillsHeader}</p>
      <p>{cv.location}</p>
      <p>
        <a href={`mailto:${cv.Mail}`} className="profile-link">
          {cv.Mail}
        </a>
      </p>
      <p>{cv.modality}</p>
      <div className="profile-container">
        <p className="profile-description">
        {cv.profile}
      </p>
</div>
    </section>
  );
}

export default Profile;

