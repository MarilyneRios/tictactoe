import React, { useState } from 'react';
import Player from './Components/TicTacToe/Player';
import './App.css';
import { TicTacToe } from './Components/TicTacToe/TicTacToe';

function App() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  return (
    <div>
      <div className='player-container'>
      <Player name={player1Name} setName={setPlayer1Name} number={1} />
      <Player name={player2Name} setName={setPlayer2Name} number={2} />
      </div>
   
      <TicTacToe player1Name={player1Name} player2Name={player2Name} />
    </div>
  );
}

export default App;
