import React from 'react'

const Player = (name) => {
  return (
    <div>
    <label>Enter the player name :</label>
    <input>{name}</input>
    </div>
  )
}

export default Player