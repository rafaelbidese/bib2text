import React, { useState, useEffect } from 'react'
import Cite from 'citation-js';
import './Citation.css'

const Citation = ({ highlight }) => {
    const [text,setText] = useState('')

    useEffect(() => bib2text(highlight),[highlight]);

    function bib2text(bib){
        var cite = new Cite();

        var opt = { 
            type: 'string',
            style:'citation-apa',
            lang:'en-US'
        }
        var parseAsync = Cite.parse.input.async.chain

        parseAsync(bib)
        .then((data) => setText(cite.set(data).get(opt)))
        .catch((e) => setText(e.message))
    }

    return (
        <div className="citation-wrapper">
            <h2>Plain Text Citation</h2>
            <p>{text}</p>
        </div>
    )
}






export default Citation;



        
