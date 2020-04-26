import React, {useState, useEffect}  from 'react';
import './App.css';
import Cite from 'citation-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import sampleBib from './utils/sampleBib.js'



function App() {
  const [bib, setBib]     = useState('');
  const [query, setQuery] = useState(sampleBib)
  const [text, setText]   = useState('');

  function getQuery(){
    if(bib !== '' && bib !== query){
      setQuery(bib);
    }
  }

  function convertBib(){
    var cite = new Cite();

    var opt = { 
      type: 'string',
      style:'citation-apa',
      lang:'en-US'
   }
    var parseAsync = Cite.parse.input.async.chain

    parseAsync(query)
    .then((data) => setText(cite.set(data).get(opt)))
    .catch((e) => setText(e.message))
  }

  useEffect(() => {
    convertBib();
  },[query]);

  return (
    <div className="App">
      <h1>bib2text</h1>
      <div className="outside-container">
        <h2>Input your bib citation here</h2>
        <textarea 
            placeholder={sampleBib} 
            value={bib}
            onChange={(e) => setBib(e.target.value)}
            onBlur={getQuery}
        />
        <h2>Plain Text Citation</h2>
        <p>{text}</p>
      </div>
      <footer className='footer'>
        Designed with 
        <FontAwesomeIcon className='fa-coffee' icon={faCoffee}/>
        <a href="http://www.github.com/rafaelbidese">
        by Rafael Bidese 
        <FontAwesomeIcon className='fa-github' icon={faGithub}/></a>
</footer>
    </div>
  );
}

export default App;
