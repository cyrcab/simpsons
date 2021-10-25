import React from 'react';

function DisplaySingleQuote({ quote }) {
  return (

      quote && (
      <div>
        <img src={quote.image} alt={quote.character}/>
        <p>{quote.quote}</p>
      </div>
      )
  );
}

export default DisplaySingleQuote;