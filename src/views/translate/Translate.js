import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react';

const TranslateComponent = () => {
  const [us_text, us_setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState(''); // Idioma de origen predeterminado
  const [targetLanguage, setTargetLanguage] = useState(''); // Idioma de destino predeterminado

  const handleTranslate = async () => {
    /* const translated = await fetch("https://es.libretranslate.com/translate", {
       method: "POST",
       body: JSON.stringify({
         q: us_text,
         source: sourceLanguage,
         target: targetLanguage,
         format: "text",
         api_key: ""
       }),
       headers: { "Content-Type": "application/json" }
     });*/

    const translated = 'https://link-bilingual-dictionary.p.rapidapi.com/spa/eng/money';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2eebfe5bd8msh74aa169da8157a2p19c0fcjsn1fffbef4709a',
        'X-RapidAPI-Host': 'link-bilingual-dictionary.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(translated, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    const translatedData = await translated.json();
    setTranslatedText(translatedData.translatedText);
  };

  return (
    <CRow>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardBody>
            <CCol>
              <CFormLabel htmlFor="sourceLanguage">Idioma de origen</CFormLabel>
              <CFormSelect id="sourceLanguage" value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                <option value="auto">...</option>
                <option value="en">Inglés</option>
                <option value="es">Español</option>
                <option value="fr">Francés</option>
                <option value="por">Portugués</option>
                {/* Agrega más opciones según los idiomas disponibles */}
              </CFormSelect>
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={6}>
        <CCard className="mb-4">
          <CCardBody>
            <CCol>
              <CFormLabel htmlFor="targetLanguage">Idioma de destino</CFormLabel>
              <CFormSelect id="targetLanguage" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                <option value="auto">...</option>
                <option value="spa">Español</option>
                <option value="eng">Inglés</option>
                <option value="fra">Francés</option>
                <option value="por">Portugués</option>
                {/* Agrega más opciones según los idiomas disponibles */}
              </CFormSelect>
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>

      <CCard>
        <CCardBody>
          <div className="row">
            <div className="col-md-10">
              <CForm>
                <CFormLabel htmlFor="exampleFormControlTextarea1">Ingrese su texto</CFormLabel>
                <CFormTextarea value={us_text} onChange={(e) => us_setText(e.target.value)}></CFormTextarea>
              </CForm>
            </div>
            <div className="col-md-2">
              <br /><br />
              <CForm>
                <CButton color="primary" onClick={handleTranslate}>Traducir</CButton>
              </CForm>
              <br />
            </div>
            <div className="col-md-12">
              <br />
              <CForm>
                <CFormLabel>Texto traducido:</CFormLabel>
                <CFormTextarea readOnly value={translatedText}></CFormTextarea>
              </CForm>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </CRow>
  );
};

export default TranslateComponent;
