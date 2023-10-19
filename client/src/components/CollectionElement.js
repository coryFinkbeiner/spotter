import React from 'react'

function CollectionElement({
  key,
  collectionData
}) {

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
          backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd')",
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

export default CollectionElement