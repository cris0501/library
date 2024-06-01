import React from 'react'
import RenderContent from '../../utils/Render'
import { BlockMath } from 'react-katex'

import './style.css'

const CustomBlockMath = ({ content }) => {
  return (
    <div className="mb-10">
      <BlockMath>{content}</BlockMath>
    </div>
  );
}

export default CustomBlockMath
