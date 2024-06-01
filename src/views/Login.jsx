import React from 'react'

import '../assets/styles/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="container">
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