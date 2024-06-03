import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../assets/styles/Login.css'

const Register = () => {
  const location = useLocation()
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    if ( ['/login', '/register'].includes(location.pathname) ) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [location.pathname]);

  return (
    <div className='login'>
      <div className="container">

        <div className="flex mb-12 space-x-5">
          <Link to="/login">
            <span className={`${ location.pathname == '/login' ? 'border-b-4 border-second' : ''}`}>
              Iniciar 
            </span>
          </Link>
          <Link to="/register">
            <span className={`${ location.pathname == '/register' ? 'border-b-4 border-second' : ''}`}>
              Registro 
            </span>
          </Link>
        </div>

        <div className="flex flex-col space-y-3 mb-8">
          <p className='text-4xl font-bold'> ¡Bienvenido! </p>
          <p className=''> Agradecemos mucho tus ganas de colaborar </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full">
          <input type="text" placeholder='Nombre(s)' />
          <input type="text" placeholder='Apellidos' />
        </div>

        <input type="email" placeholder='correo@ipn.mx' />

        <input type="password" placeholder='Contraseña' />
        <input type="password" placeholder='Repite tu contraseña' />

        <div className="flex justify-center pt-4">
          <button className=''> Registrarse </button>
        </div>
      </div>

      <div className="bg"></div>
    </div>
  )
}

export default Register
