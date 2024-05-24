import React from 'react';
import {
  CButton,
} from '@coreui/react';

const Logoff = () => { 

  const handleLogout = () => {
    // Marcar al usuario como desconectado en el localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.reload(true);
  }

  return (   
    <CButton color="primary" className="px-4" onClick={handleLogout}>
      Logoff
    </CButton>
  );
};

export default Logoff;
