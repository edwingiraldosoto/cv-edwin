import { cv } from "../data/cv";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="map-wrapper">
        {/* Mapa centrado en el Parque Principal de Envigado */}
        <iframe 
          title="Ubicación Parque de Envigado"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d-75.5889389251061!3d6.169371793817815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468233f2c544d1%3A0xc3f8e5828464307a!2sParque%20Principal%20de%20Envigado%20Marceliano%20V%C3%A9lez%20Barreneche!5e0!3m2!1ses!2sco!4v1715870000000!5m2!1ses!2sco" 
          width="100%" 
          height="400" 
          style={{ border: 0, borderRadius: '15px' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer-text">
        <p className="city-label">{cv.location}</p>
        <p className="copyright">
          © {currentYear} | Producido por <strong>{cv.name}</strong> 
        </p>
        <p className="role-tag">
            {cv.title} | {cv.specialization} | {cv.focusing} 
        </p>
      </div>
    </footer>
  );
}

export default Footer;