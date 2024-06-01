import React, {useState} from 'react'
import RenderContent from '../../utils/Render';
import './style.css'

const Note = ({ title, content }) => {

  const [show, setShow] = useState(false)

  function handler (){
    setShow(!show)
  }

  return (
    <div className="note">
      <p className="inline font-bold cursor-pointer underline decoration-double" onClick={handler}>{title}</p>
      <div className={`${show ? '' : 'hidden'}`}>
        {content.map((item, index) => (
          <RenderContent key={`note-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Note