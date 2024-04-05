import React from 'react'

const Message = ({msg}) => {

  return (
    <div className='MessageContainer'>
        <h2>{msg}</h2>
    </div>
  )
}

export default Message