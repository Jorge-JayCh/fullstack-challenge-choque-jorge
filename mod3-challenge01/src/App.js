import logo from './logo.svg';
import './App.css';
import ImagenList from './components/ImagenList';
import React, {useState} from 'react'
import {getCharacters} from './service';

function App() {
  console.log("App rendered !!!");
  const [principal, setPrincipal] = useState('');
  return (
    <div className="App">
      <div className='color-square'>
        <img src={principal} alt='Sin imagen'></img>
      </div>
      <div>
      </div>
      <ImagenList setPrincipal={setPrincipal}/>
    </div>
  );
}

export default App;
