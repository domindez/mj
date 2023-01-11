import React, { useEffect } from 'react';
import DOMPurify from 'dompurify';
import '../sass/Main.scss';


const Doctoralia: React.FC= () => {
  const html = '<a id="zl-url" class="zl-url" href="https://www.doctoralia.es/ma-angeles-contreras-penalver/psicologo/malaga" rel="nofollow" data-zlw-doctor="ma-angeles-contreras-penalver" data-zlw-type="big" data-zlw-opinion="true" data-zlw-hide-branding="true">Mª Ángeles Contreras Peñalver - Doctoralia.es</a>';
    
  const cleanHTML = DOMPurify.sanitize(html);


  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//platform.docplanner.com/js/widget.js';
    script.async = true;
    document.body.appendChild(script);
  },[]);
  
  return (
    <section>
      <h2>Mi perfil en Doctoralia</h2>
      
      <div className='doctoralia' dangerouslySetInnerHTML={{ __html: cleanHTML }} />
      <a className='review' href="https://www.doctoralia.es/anade-opinion/ma-angeles-contreras-penalver#/opinion">Deja tu opinión</a>
    </section>
  );
};
  
export default Doctoralia;