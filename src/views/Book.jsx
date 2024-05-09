import React from 'react';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css'

const markdownContent = `
# Mi Documento

Esto es un texto normal.

Aquí una ecuación en línea: $\\frac{1}{2}$

Y un bloque de ecuación:

$$
\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$
`;

const App = () => {
  return (
    <div>
      <ReactMarkdown
        children={markdownContent}
        components={{
          inlineMath: ({ value }) => <InlineMath math={value} />,
          math: ({ value }) => <BlockMath math={value} />,
        }}
      />
    </div>
  );
};

export default App;
