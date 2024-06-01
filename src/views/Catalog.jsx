import React,{useState, useRef} from 'react'

import Card from '../components/Card/Card';

const Catalog = () =>{
  const section0 = useRef(null)
  const section1 = useRef(null)

  const mapSections = [
    section0, section1
  ]

  function toggleSection (target){
    const temp = mapSections[target].current.style.height
    mapSections[target].current.style.height = (temp == '0px' || temp == 0 ) ? 'auto' : 0
  }

  return (
    <div className='flex flex-col w-full p-4'>
      <div className="flex flex-col w-full px-4 py-2">
        <p className='text-4xl font-bold px-4 mb-3'> Mas consultados </p>
        <hr />
        <div className='flex flex-wrap justify-around w-full mb-12'>
          <Card title="Teoria de conjuntos" writer="Cristian R" author="Cristian R" />
          <Card title="Algebra Moderna" writer="Fernanda M" author="Cristian R" />
          <Card title="Teoria de conjuntos" writer="Cristian R" author="Cristian R" />
          <Card title="Geometria diferencial" writer="Fernanda M" author="Cristian R" />
        </div>
      </div>

      <div className="flex flex-col w-full px-4 py-2">
        <p className='w-full cursor-pointer text-4xl font-bold px-4 mb-3' onClick={ () => toggleSection(0)}> Libros </p>
        <div className='flex flex-wrap justify-around w-full h-0 overflow-y-hidden' ref={section0} >
          <Card title="Teoria de conjuntos" writer="Cristian R" author="Cristian R" />
          <Card title="Algebra Moderna" writer="Fernanda M" author="Cristian R" />
          <Card title="Teoria de conjuntos" writer="Cristian R" author="Cristian R" />
          <Card title="Geometria diferencial" writer="Fernanda M" author="Cristian R" />
          <Card title="Espacios vectoriales" writer="Cristian R" author="Cristian R" />
        </div>
        <hr className="mt-2 mb-12" />
      </div>

      <div className="flex flex-col w-full px-4 py-2">
        <p className='w-full cursor-pointer text-4xl font-bold px-4 mb-3' onClick={ () => toggleSection(1)}> Articulos </p>
        <div className='flex flex-wrap justify-around w-full h-0 overflow-y-hidden' ref={section1} >
          <Card title="Teoria de conjuntos" writer="Cristian R" author="Cristian R" />
          <Card title="Algebra Moderna" writer="Fernanda M" author="Cristian R" />
          <Card title="Teoria de conjuntos" writer="Cristian R" author="Cristian R" />
          <Card title="Geometria diferencial" writer="Fernanda M" author="Cristian R" />
          <Card title="Espacios vectoriales" writer="Cristian R" author="Cristian R" />
        </div>
        <hr className="mt-2 mb-12" />
      </div>
    </div>
  )
  
}

export default Catalog