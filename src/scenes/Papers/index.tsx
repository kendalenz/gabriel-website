import React from 'react';

const DownloadPDF = () => {
    const pdfUrl1 = '../src/assets/Rewriting-Group-Products-with-Transversals.pdf'; 
    const pdfFileName = 'Rewriting-Group-Products-with-Transversals.pdf'; 
  
    return (
      <div>
        <a href={pdfUrl1} download={pdfFileName} className='underline'>
        "Rewriting Group Products with Transversals"
        </a>
      </div>
    );
  };
  
  export default DownloadPDF;