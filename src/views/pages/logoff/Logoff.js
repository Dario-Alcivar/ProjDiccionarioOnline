import React, { useState, useEffect } from 'react';
import {
  CModal,
  CModalBody
} from '@coreui/react';

const Logoff = () => {
  
  const [visible, setVisible] = useState(true);

  const handleLogout = () => {
    // Remover localStorage y recargar la página después de 5 segundos
    setTimeout(() => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      window.location.reload(true);
    }, 2500);
  };

  useEffect(() => {
    // Ejecutar handleLogout al montar el componente
    handleLogout();
  }, []); // Arreglo de dependencias vacío para que se ejecute una sola vez al montar el componente

  return (
    <>
      <CModal
        backdrop="static"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="StaticBackdropExampleLabel"
      >
        <CModalBody>
          Estás saliendo del sistema, te esperamos de vuelta...
        </CModalBody>        
      </CModal>
    </>
  );
};

export default Logoff;
