import React from 'react';
import '../sass/Facebook.scss';

const Facebook = () => {
  return (
    <>
      <h2>Talleres y Eventos</h2>
      <iframe 
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPabloRuedaIES%2Fposts%2Fpfbid0aTprTpJgh71qWK3i8Pr5tkgCpkEaC2RNYNA83tESLdRTxYjqZQ6JDzcwq2rM7Rcql&show_text=true&width=500" 
        width="380" 
        height="767" 
        style={{border: 'none', overflow: 'hidden'}} 
        scrolling="no" 
        frameBorder="0"  
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
    </>
  );
};

export default Facebook;
