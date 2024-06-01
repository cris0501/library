import React from "react"
import { InlineMath } from 'react-katex';

import 'katex/dist/katex.min.css';

const Equation = ({content}) => {
  return (
    <div className="mx-4 inline">
      <InlineMath>{content}</InlineMath>
    </div>
  )
}

export default Equation