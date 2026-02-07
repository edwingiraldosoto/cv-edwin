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
      
      <p className="sidebar-hello">Hola, Yo soy</p>
      <h2 className="sidebar-name">{cv.name}</h2>
      <h2 className="sidebar-name">{cv.title}</h2>
      <h2 className="sidebar-name">{cv.specialization}</h2>

   <div className="sidebar-social">
  {/* LinkedIn */}
  <a href={cv.linkedin} target="_blank" rel="noopener noreferrer" className="btn-social btn-linkedin">
    <i className="fa-brands fa-linkedin"></i> LinkedIn
  </a>

  {/* Teléfono */}
  <a href={`tel:${cv.Phone}`} className="btn-social btn-phone">
    <i className="fa-solid fa-mobile-screen-button"></i> {cv.Phone}
  </a>

  {/* Descargar PDF */}
  <DownloadPDF />
</div>


    </aside>
  );
}

export default Sidebar;
