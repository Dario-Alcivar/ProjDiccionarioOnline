/* SE ENCONTRATÁ TODA LA INFORMACIÓN REFERENTE A LA BASE DE DATOS */
// Desde la creacion de tablas, hasta el contenido de prueba de cada uno de ellas. 



//https://es.libretranslate.com/ --> propuesta de api 



/*

import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react';


import translateText from './TranslateController';

const TranslationComponent = () => {
  const [translatedText, setTranslatedText] = useState('');
  const [textToTranslate, setTextToTranslate] = useState('');
  const [sourceLang, setSourceLang] = useState('es');
  const [targetLang, setTargetLang] = useState('en');

  const handleTranslate = async () => {
      const translation = await translateText(textToTranslate, sourceLang, targetLang);
      if (translation) {
          setTranslatedText(translation);
      } else {
          setTranslatedText('Error al traducir el texto');
      }
  };

  return (
      <div>
          <input type="text" value={textToTranslate} onChange={(e) => setTextToTranslate(e.target.value)} />
          <button onClick={handleTranslate}>Translate</button>
          <div>Translated Text: {translatedText}</div>
      </div>
  );
};

export default TranslationComponent;


********************************************

import axios from 'axios';

const TranslateController = async (text, sourceLang, targetLang) => {
    const apiKey = 'y0_AgAAAAB2QPuHAATuwQAAAAEFqStCAABQcmGQ7PJCM45OE_L1IlrtmnujLg';
    const apiUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&lang=${sourceLang}-${targetLang}`;

    const requestBody = {
        yandexPassportOauthToken: '<OAuth-токен>',
        text: text
    };

    debugger;      
    try {
        const response = await axios.post(apiUrl, requestBody);
        return response.data.text[0];
    } catch (error) {
        console.error('Error al traducir el texto:', error);
        return null;
    }
};

export default TranslateController;

*/