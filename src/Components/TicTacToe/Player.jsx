import React from 'react'
import './PlayerCSS.css'
const Player = ({ name, setName, number }) => {
  return (
      <div className='player'>
          <label className='label-player'>Enter the player {number} name :</label>
          <input className='input-player' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
  );
}

export default Player
