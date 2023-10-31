import React, { useEffect, useState } from 'react'

function CollectionElement({
  item,
  key
}) {

  const [ imageUrl, setImageUrl ] = useState(null)
  const [ lineA, setLineA ] = useState(null)
  const [ lineB, setLineB ] = useState(null)

  console.log({item})

  useEffect(() => {
    if (!item) return

    if (item.album) {
      setImageUrl(item.album.images[0].url)
      setLineA(item.album.name)
      setLineB(item.album.artists[0].name)
    } else if (item.images){
      setImageUrl(item.images[0].url)
      setLineA(item.name)
      setLineB(item.owner.display_name)
    }

  }, [item])


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
          backgroundImage: `url(${imageUrl})`,
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

// Playlists and Albums