import React from 'react'

function Album({item, key}) {


  return (

    <div
      style={{
        backgroundColor: 'red',
        // height: '22vh',
        // height: '100%',
        padding: '2px',
        display: 'grid',
        gridTemplateRows: '3fr 1fr',
      }}
    >

      <div
        style={{
          backgroundImage: `url(${item.album.images[0].url})`,
          backgroundSize: 'cover', // Options: 'auto', 'contain', 'cover', or specific values like '50% 50%'
          backgroundPosition: 'center',

          height: '118px',
          width: ' 118px',
        }}
      >

      </div>

      <div
        style={{
          backgroundColor: 'white',
        }}
      >
      </div>

    </div>

  )
}

export default Album