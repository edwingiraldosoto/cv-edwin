import { cv } from "../data/cv";
import profileImg from "../assets/profile.jpg";
import DownloadPDF from "./DownloadPDF"

function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src={profileImg}
        alt={cv.name}
        className="sidebar-photo"
        crossOrigin="anonymous"
      />

      {/* Usamos h1 para el nombre y p para los roles para que no hereden los estilos de h2 (cuadros verdes) */}
      <h1 className="sidebar-name">{cv.name}</h1>
      <p className="sidebar-role">{cv.title}</p>
      <p className="sidebar-role">{cv.specialization}</p>

      <div className="sidebar-social">
        <a href={cv.linkedin} target="_blank" rel="noopener noreferrer" className="btn-social btn-linkedin">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>

        <a href={`tel:${cv.Phone}`} className="btn-social btn-phone">
          <i className="fa-solid fa-mobile-screen-button"></i> {cv.Phone}
        </a>

        <DownloadPDF />
      </div>
    </aside>
  );
}

export default Sidebar;
