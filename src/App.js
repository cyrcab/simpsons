
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import DisplaySingleQuote from './components/DisplaySingleQuote';

function App() {
  
  const sampleQuote = {
    character: "Rainier Wolfcastle",
    characterDirection: "Right",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035",
    quote: "My eyes! The goggles do nothing!"
  }
  
  
  const getSingleQuote = () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      setQuote(data[0])
    })
  }
  const [quote, setQuote] = useState(sampleQuote);
  
  return (
    <div className="App">
    <DisplaySingleQuote quote={quote}/>
    <button type="button" onClick={getSingleQuote}>Get Quote</button>
    </div>
    );
  }
  
  
  
  export default App;
  