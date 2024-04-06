
import React, { useState } from 'react';
import Player from './Player/Player';
import Header from './Components/header/Header';
import './App.css';
import { TicTacToe } from './Components/TicTacToe/TicTacToe';

function App() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handlePlayer1NameChange = (newName) => {
    setPlayer1Name(newName);
    setGameStarted(false);
  }

  const handlePlayer2NameChange = (newName) => {
    setPlayer2Name(newName);
    setGameStarted(false);
  }

  // Détermine si les noms des deux joueurs ont été saisis
  const playersNamesEntered = player1Name !== "" && player2Name !== "";

  // Détermine si le jeu peut être lancé
  const canStartGame = playersNamesEntered && !gameStarted;

  return (
    <div className="app-container">
      <Header/>
      {!gameStarted && (
        <div className='player-container'>
          <Player name={player1Name} setName={handlePlayer1NameChange} number={1} />
          <Player name={player2Name} setName={handlePlayer2NameChange} number={2} />
        </div>
      )}
   
     
      {canStartGame && (
        <TicTacToe player1Name={player1Name} player2Name={player2Name} />
      )}
    </div>
  );
}

export default App;
