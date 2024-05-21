import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import TranslateController from './TranslateController';

const TranslateComponent = () => {
  const [us_text, us_setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    const translated = await fetch("https://es.libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: us_text,
        source: "auto",
        target: "es",
        format: "text",
        api_key: ""
      }),
      headers: { "Content-Type": "application/json" }
    });

    console.log(await translated.json());
    //setTranslatedText(translated);
  };



  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          {/*<CCardHeader>
              <strong>React Form Control</strong>
            </CCardHeader>*/}
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                <CFormTextarea value={us_text} onChange={(e) => us_setText(e.target.value)}></CFormTextarea>

                <CFormLabel htmlFor="exampleFormControlTextarea1" style={{ background: 'red' }}>{translatedText}</CFormLabel>
              </div>
              <CButton onClick={handleTranslate}>Traducir</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TranslateComponent