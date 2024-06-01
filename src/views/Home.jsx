import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { InlineMath } from 'react-katex'

import '../assets/styles/Home.css'

import Book from '../components/Animations/Book/Book'
import Pizza from '../components/Animations/Pizza/Pizza'

const Home = () =>{
  const [isVisible, setIsVisible] = useState(false)

  const faq = [
    {
      title: '¿Tiene algún costo?',
      content: 'No, es un proyecto altruista para apoyar a los estudiantes por lo que no tiene costo alguno.'
    },
    {
      title: `¿Que pasa si no se LaTeX?`,
      content: `No te preocupes, la publicación de tu contenido será un proceso lento ya que será
            el equipo el encargado de la transcripción. El simple hecho de compartir tus notas nos es
            de mucha ayuda.`
    },
    {
      title: '¿Su contenido es confiable?',
      content: `El contenido que ofrecemos esta redactado por estudiantes, lo que les permite practicar sus
            conocimientos en LaTeX así como apoyar a la comunidad, sin embargo, esto
            no nos excenta de cometer errores. Por ello, un equipo de estudiantes proximos a graduarse
            revisa el contenido y consulta con diversos profesores las posible dudas. Es importante
            recalcar que los contenidos pueden contener errores de redacción, por ello es que la
            comunidad tiene la posibilidad de participar ayudandonos a corregir estos errores.`
    },
    {
      title: `¿Como puedo colaborar?`,
      content: `Hay muchas formas de apoyar esta causa. Puedes enviar tus notas digitalizadas en formato PDF
            para que los miembros del equipo comiencen la transcripción. Tambien, si tienes conocimientos
            de LaTeX o tus notas ya se encuentran en este formato, puedes subirlas y con gusto el equipo
            adaptara la sintaxis de LaTeX a nuestra sintaxis enriquecida para posteriormente usar el
            traspilador que hemos creado.`
    },
    {
      title: '¿Hay limite de participación?',
      content: `No hay limite de participación. Puedes compartir las notas que consideres utiles para los
            compañeros, reportar errores, compartir investigaciones o ejercicios. Estos serán revisados por
            miembros del equipo. Recuerda que esto puede ser un proceso lento.`
    },
  ]

  useEffect(() => {
    const stack = document.getElementById('stack')
    const accounts = document.getElementById('accounts')

    const handleScroll = () => {
      if (window.innerHeight - stack.getBoundingClientRect().top > 300 ) {
        stack.style.opacity = "1";
      }
      if (window.innerHeight - accounts.getBoundingClientRect().top > 300 ) {
        accounts.style.opacity = "1";
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []);

  return (
    <>
      <div className='flex flex-col h-[100vh] w-3/4 mx-auto justify-center text-white'>
        <div className='flex flex-col lg:flex-row items-center justify-around w-full'>
          <Book />
          <div className=''>
            <p className="text-[2rem] md:text-[2.5rem]">Biblioteca Virtual</p>
            <p className="text-[6rem] leading-[6rem] w-full text-center font-bold">ESFM</p>
            {/* <p className='text-[1rem] text-right'> Cristian R. </p> */}
          </div>
        </div>
        <p className='text-3xl lg:text-5xl text-center font-caveat mt-20 lg:mt-[150px]'>
          Crea libros interactivos a partir de tus notas y
          ayuda a otros estudiantes.
        </p>
      </div>

      <div className='text-gray-500 bg-gray-100 px-5 py-12'>
        <div className="flex justify-around items-center">
          <p> Stack </p>
          <p> Cuenta </p>
          <p className='text-3xl text-gray-600 border-4 border-gray-900 p-2'> BV </p>
          <p> Proposito </p>
          <p> FAQ </p>
        </div>
      </div>

      <div className='text-gray-500 bg-gray-100 px-5 py-12'>
        <div className="flex flex-col justify-center items-center">
          <p className='text-3xl'> Ayuda a tu comunidad </p>
          <p className="underline decoration-wavy my-2 mb-5"> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; </p>
          <p className='text-xl w-5/6 lg:w-1/2 mx-auto text-center mb-10'>
            Publica el contenido de tus notas, comparte tus apuntes con la comunidad
            enriqueciendo su contenido, volviendo interactivas tus notas y todo esto
            manteniendo la calidad tipografica de <InlineMath>\LaTeX</InlineMath>.
          </p>
        </div>
      </div>

      <div className='px-8 md:px-16 py-24'>
        <div id="stack" className="flex flex-col lg:flex-row justify-center items-center transition-opacity duration-800 ease-in-out opacity-0">
          <div className='w-full lg:w-1/3'>
            <p className='text-3xl md:text-5xl font-bold'>
              Integración de <br />
              multiples tecnologías
            </p>
            <p className='text-justify my-5'>
              Enriqueciendo la sintaxis de <InlineMath>\LaTeX</InlineMath> podemos generar contenido
              interactivo, libros que permiten visualizar imagenes, animaciones, videos, etc.
            </p>
            <p className="text-justify">
              Para ello integramos multiples tecnologías que nos permiten optimizar el manejo de
              información así como el desarrollo y la integración de los distintos
              componentes que conforman esta App. Estas son algunas de ellas.
            </p>
          </div>
          <div className='w-full lg:w-2/3 grid grid-cols-3 grid-rows-2 content-center justify-items-center mt-10 lg:mt-0 text-6xl'>
            <i className="mt-8 icon-latex"></i>
            <i className="mt-8 icon-python"></i>
            <i className="mt-8 icon-c"></i>
            <i className="mt-8 icon-react"></i>
            <i className="mt-8 icon-laravel"></i>
            <i className="mt-8 icon-tailwindcss"></i>
          </div>
        </div>
      </div>

      <div id="accounts" className="flex flex-col md:flex-row justify-around items-stretch w-full mx-auto lg:px-12 pt-12 pb-20 bg-gradient-to-b from-[#2d3250] from-25% to-slate-500 transition-opacity duration-500 ease-in-out opacity-0">
        <div className="flex flex-col justify-around w-5/6 md:w-5/12 lg:w-1/3 rounded shadow-lg bg-gray-100 text-gray-800 p-8 mx-auto">
          <p className="text-3xl mb-8">
            Cuenta anonima
          </p>
          <p className="w-3/4 mb-8">
            Podrás hacer uso de la App, sin embargo,
            no tedrás acceso a muchas de las funciones.
          </p>
          <table className="w-full rounded-lg overflow-hidden">
            <tbody>
              <tr className='bg-teal-500/25 border-b-2 border-slate-500'>
                <td className='p-2'> Acceso  a libros</td>
                <td> <i className='icon-check text-green-700'></i> </td>
              </tr>
              <tr className='bg-teal-100/25 border-b-2 border-slate-500'>
                <td className='p-2'> Offline </td>
                <td> <i className='icon-check text-green-700'></i> </td>
              </tr>
              <tr className='bg-red-200/25 border-b-2 border-slate-500'>
                <td className='p-2'> Comentarios </td>
                <td> <i className='icon-cancel text-red-700'></i> </td>
              </tr>
              <tr className='bg-red-200/25 border-b-2 border-slate-500'>
                <td className='p-2'> Publicaciones </td>
                <td> <i className='icon-cancel text-red-700'></i> </td>
              </tr>
              <tr className='bg-red-200/25 border-b-2 border-slate-500'>
                <td className='p-2'> Contribuciones </td>
                <td> <i className='icon-cancel text-red-700'></i> </td>
              </tr>
            </tbody>
          </table>

          <Link to="/catalog" className="w-1/2 mx-auto mt-10">
            <button className="w-full px-3 py-2 rounded-lg bg-cyan-600 text-white"> Catálogo </button>
          </Link>
        </div>
        <div className="flex flex-col justify-around w-5/6 md:w-5/12 lg:w-1/3 rounded shadow-lg bg-gray-100 text-gray-800 p-8 mx-auto mt-5 md:mt-0">
          <p className="text-3xl mb-8">
            Cuenta verificada
          </p>
          <p className="w-3/4 mb-8">
            Podrás hacer uso completo de la App
            (aplica terminos y condiciones).
          </p>
          <table className="w-full rounded-lg overflow-hidden">
            <tbody>
              <tr className='bg-teal-500/25 border-b-2 border-slate-500'>
                <td className='p-2'> Acceso a libros</td>
                <td> <i className='icon-check text-green-700'></i> </td>
              </tr>
              <tr className='bg-teal-100/25 border-b-2 border-slate-500'>
                <td className='p-2'> Offline </td>
                <td> <i className='icon-check text-green-700'></i> </td>
              </tr>
              <tr className='bg-teal-500/25 border-b-2 border-slate-500'>
                <td className='p-2'> Comentarios </td>
                <td> <i className='icon-check text-green-700'></i> </td>
              </tr>
              <tr className='bg-teal-100/25 border-b-2 border-slate-500'>
                <td className='p-2'> Publicaciones </td>
                <td> <i className='icon-check text-green-700'></i> </td>
              </tr>
              <tr className='bg-teal-500/25 border-b-2 border-slate-500'>
                <td className='p-2'> Contribuciones </td>
                <td> <i className='icon-check text-green-700'></i> </td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-col lg:flex-row justify-center mt-10 space-y-3 lg:space-y-0">
            <button className="w-3/4 lg:w-5/12 px-3 py-2 mx-auto rounded-lg bg-cyan-600 text-white">
              Registrarse
            </button>
            <Link to="/login" className="w-3/4 lg:w-5/12 mx-auto mt-10">
              <button className="w-full px-3 py-2 rounded-lg border-2 border-cyan-600 text-cyan-600"> Iniciar </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full mx-auto px-8 md:px-20 lg:px-32 py-12 bg-slate-100 text-gray-800">
        <div className='flex flex-col w-5/6 lg:w-1/2 mx-auto'>
          <p className="font-bold text-4xl mb-8">
            Proposito
          </p>
          <p className=''>
            Sabemos que hay muchos estudiantes que hacen notas muy <b>esteticas</b>, muy <b>detalladas</b>, 
            otros con un <b>contenido sumamente cuidado</b>, centrados en el tema y una vez que termina
            el curso, esas notas suelen guardarse. Entonces... <br /><br />
          </p>
          <p className='text-3xl'>
            ¿Por que no compartirlas?
          </p>
        </div>
        <div className='hidden lg:flex items-center justify-center w-1/2 overflow-x-hidden h-[400px]'>
          <Pizza />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap justify-around items-stretch w-full mx-auto p-12">
        {faq.map( (item, index) => (
          <div key={'faq'+index} className="flex flex-col justify-center w-full lg:w-5/12 rounded-lg p-8 mx-auto my-2 bg-gray-100 text-gray-800">
            <p className='text-xl font-bold mb-5'> {item.title} </p>
            <p className='text-justify'>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home