import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CSpinner, useColorModes } from '@coreui/react';
import './scss/style.scss';

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme');
  const storedTheme = useSelector((state) => state.theme);

  // Estado para verificar si el usuario ha iniciado sesión
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);

    // Comprobación del estado de inicio de sesión en el localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = () => {
    // Guardar el estado de inicio de sesión en el localStorage
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Marcar al usuario como desconectado en el localStorage
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          {/* Página de inicio de sesión */}
          <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />

          {/* Páginas accesibles solo después de iniciar sesión */}
          {isLoggedIn ? (
            <>
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />            

              {/* Página por defecto después de iniciar sesión */}
              <Route path="*" element={<DefaultLayout onLogout={handleLogout} />} />
            </>
          ) : (
            // Si el usuario no ha iniciado sesión, redirecciona a la página de inicio de sesión
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
