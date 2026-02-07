function DownloadPDF() {
  const handleDownload = () => {
    // La ruta apunta a la carpeta public de tu proyecto
    const fileUrl = '/public/CV_Edwin_Giraldo_Soto_ATS_Harvard.pdf'; 
    
    // Creamos un enlace temporal para forzar la descarga
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_Edwin_Giraldo_Soto_ATS.pdf'; // El nombre con el que se guardará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="btn-download" type="button">
      <i className="fa-solid fa-file-pdf"></i>
      Descargar CV
    </button>
  );
}

export default DownloadPDF;