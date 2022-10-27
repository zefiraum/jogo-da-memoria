import { useState } from 'react';
import '../../styles/game.css';

export function Game() {

  const [card, setCard] = useState(false);

  function virarCarta() {
    if(card) {
      setCard(!card);
    } else {
      setCard(!card);
    }
  }

  const cards = [
    'beth',
    'jerry',
    'jesssica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
  ];

  const listaCards = cards.map( (character, id) =>
    <div key={id} className={`card ${character} ${card ? 'virar__carta' : ''}`} onClick={(e) => virarCarta()}>
      <div className='face front'></div>
      <div className='face back'></div>      
    </div>
  )

  return (
    <div className="grid">
      {listaCards}
    </div>
  );
}