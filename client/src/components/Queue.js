import React from 'react'
import Track from './Track'

function Queue() {
  return (
    <div
      style={{
        padding: '20px 10px 10px 10px',
        margin: '10px 10px 0px 0px',
        backgroundColor: 'rgb(18, 18, 18)',
        borderRadius: '8px',
        height: '87vh'

      }}
    >

      <div
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '23px'
        }}
      >
        Queue
      </div>

      <div
        style={{
          backgroundColor: 'green',
          height: '100px',
        }}
      >

      </div>


    </div>
  )
}

export default Queue