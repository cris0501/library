import React from 'react'

import '../assets/styles/Login.css'

const Register = () => {
  return (
    <div className='login'>
      <div className="container">
        <div className="flex flex-col space-y-3 mb-8">
          <p className='text-4xl font-bold'> ¡Bienvenido! </p>
          <p className=''> Agradecemos mucho tus ganas de colaborar </p>
        </div>

        <input type="text" placeholder='Nombre(s)' />
        <input type="text" placeholder='Apellidos' />

        <input type="text" placeholder='' />
        <input type="email" placeholder='correo@ipn.mx' />

        <input type="password" placeholder='Contraseña' />
        <input type="password" placeholder='Repite tu contraseña' />

        <button className=''> Registrarse </button>
      </div>

      <div className="bg">
      </div>
    </div>
  )
}

export default Register