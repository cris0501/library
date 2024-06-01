import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Read from '../Animations/Read/Read'

const Card = ({title, writer, author}) =>{
  const navigate = useNavigate()

  function handler(){
    navigate('/view')
  }

  return (
    <div className="w-1/4 p-4 mx">
      <div className="flex flex-col relative rounded-lg p-4 bg-primary">
        <p className="text-2xl font-bold my-3"> {title} </p>
        <p className=""> Redacción: {writer} </p>
        <p className=""> Autor: {author || 'Anonimo'} </p>
        <p className="text-sm my-3"> Consultas: 0 </p>
        <div className="flex justify-center w-full my-3">
          <Read onClick={handler} />
          <button className='text-center rounded-lg bg-second text-primary mx-1 w-1/3'>
            <i className='text-center w-full icon-download'></i>
          </button>
        </div>
      </div>
    </div>
  )
  
}

export default Card