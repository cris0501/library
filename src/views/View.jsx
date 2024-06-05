import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import RenderContent from '../utils/Render';
import Book from '../components/Animations/Book/Book'

import '../assets/styles/View.css'

const View = () =>{
  const [data, setData] = useState(null)
  const [fontSize, setFontSize] = useState('0.9em')

  function handleSize ({ target }){
    setFontSize(target.value+"em")
  }

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
      <div className='view w-full lg:w-5/6 px-8 py-12 mx-auto mt-5' style={{fontSize: fontSize}}>
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
        
        <div className="flex justify-between items-center w-full h-[55px] fixed top-0 left-0 p-5 bg-background">
          <Link to="/catalog"><i className="icon-left text-2xl" /></Link>
          <div className="flex">
            <p className="text-base mx-3"> T. Letra </p>
            <input type="range" id="size" name="size" min="0.7" max="1.5" step="0.1" onChange={handleSize} />
          </div>
          <div>
            <i className="icon-download text-xl" />
            <i className="text-red-400 icon-trash text-xl" />
          </div>
        </div>
      </div>
    </>
  )
}

export default View
