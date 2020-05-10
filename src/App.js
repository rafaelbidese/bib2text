import React, {useState}  from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Highlight from './components/Highlight/Highlight.js'
import Citation from './components/Citation/Citation.js'

const App = () => {
  const [bib, setBib] = useState('');

  function startConversion(value) {
    setBib(value);
  }

  return (
    <div className="App">
      <h1>bib2text</h1>
      <div className="outside-container">
        <Highlight onHighlightDone={startConversion}/>
        <Citation highlight={bib}/>
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