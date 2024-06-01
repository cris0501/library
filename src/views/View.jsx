import React,{useState, useEffect} from 'react'
import RenderContent from '../utils/Render';

import Book from '../components/Animations/Book/Book'

const View = () =>{
  const [data, setData] = useState(null)

  useEffect( () => {
    fetch('/books/test.json')
      .then( resp => resp.json() )
      .then( resp => {
        setTimeout( () => {
          setData(resp)
        }, 3000 )
      } )
      .catch( console.log )
    
    return 
  }, [])

  return (
    <>
      <div className='w-full lg:w-5/6 px-8 py-12 mx-auto mt-5'>
        {
          data && data.content ?  (
            data.content.map((item, index) => (
              <RenderContent key={'fr'+index} item={item} />
            )) ) : (
              <div className="flex flex-col justify-center items-center h-[80vh] w-full">
                <Book />
                <p className='mt-4 font-bold text-xl'> Leyendo contenido </p>
              </div>
            )
        }
      </div>
    </>
  )
}

export default View