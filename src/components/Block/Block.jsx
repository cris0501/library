import React, {useState} from 'react';
import RenderContent from '../../utils/Render';

import './style.css'

const Block = ({ items }) => {
  const [show, setShow] = useState(0)

  return (
    <div>
      <div className="customBlock border-2 rounded-lg p-2 mb-2">
        {items.map((item, index) => (
          <div key={'bfr'+index} className={`item ${show==index ? '' : 'hidden'}`}>
            {item.content.map((contentItem, idx) => (
              <RenderContent key={'bsr'+idx} item={contentItem} />
            ))}
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        {/* <button onClick={ () => {setShow( show==0 ? items.length-1 : show-1 )}} > &lt; </button> */}
        {items.map( (item,index) => (
          <button key={'btn'+index} onClick={ () => {setShow( index )}} className={`${show==index ? 'bg-green-600' : ''} mx-2 w-12 h-12 block rounded-lg font-bold focus:outline-none`}> {index+1} </button>
        ))}
        {/* <button onClick={ () => {setShow( (show+1)%items.length )}} > &gt; </button> */}
      </div>
    </div>
  );
};

export default Block;
