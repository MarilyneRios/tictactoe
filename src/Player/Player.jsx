
import React from 'react';
import './PlayerCSS.css';

const Player = ({ name, setName, number }) => {
  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className='player'>
      <label className='label-player'>Player {number} name :</label>
      <input className='input-player' value={name} onChange={handleChange} />
    </div>
  );
}

export default Player;
