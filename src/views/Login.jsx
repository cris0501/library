import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import '../assets/styles/Login.css'

const Login = () => {
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
          <p className='text-4xl font-bold'> ¡Te extrañamos! </p>
          <p className=''> Inicia sesión para continuar </p>
        </div>

        <input type="email" placeholder='correo@ipn.mx' />
        <input type="password" placeholder='Contraseña' />

        <div className="flex justify-between items-center px-4">
          <div className='flex items-center space-x-3'>
            <input type="checkbox" name="record" id="record" />
            <label htmlFor="record"> Recordarme </label>
          </div>
          <p> Olvide mi contraseña </p>
        </div>

        <button className=''> Iniciar </button>
      </div>

      <div className="bg">
      </div>
    </div>
  )
}

export default Login
