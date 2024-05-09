import React, { useState, useEffect } from 'react';
import parser from '@utils/documentParser.js'
import katex from "katex";
import 'katex/dist/katex.min.css'

const inLine = `
Aquí una ecuación en línea:
$\\frac{1}{2}$
`

const inBlock = `
$$
\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$
`

const Book = () => {
    const [page, setPage] = useState([])

    useEffect( () => {
        const equations = document.getElementsByClassName('eq')
        const blocks = document.getElementsByClassName('blockMath')

        if (equations.length){
            for( const eq of equations){
                eq.innerHTML = katex.renderToString(eq.innerHTML)
            }
        }
        if (blocks.length){
            for( const block of blocks){
                katex.render(block.innerHTML, block)
            }
        }
    }, [page])

    function handleChange (e){
        parser(e, setPage)
    }

    return (
        <>
            <div id="page">
                {page.map( (parraf) => (
                        parraf.map( (item, index) => (
                        <>
                            {item.type == 'text' && (
                                <p className="inline"> {item.content} </p>
                            )}
                            {item.break && (
                                <div className="block"></div>
                            )}
                            {item.type == 'eq' && (
                                <span className='eq'> {item.content} </span>
                            )}
                            {item.type == 'block' && (
                                <div className='blockMath'> {item.content} </div>
                            )}
                        </>
                    ))
                ))}
            </div>
            <input type="file" name="file" id="file" onChange={handleChange} />
        </>
    )
}

export default Book;
