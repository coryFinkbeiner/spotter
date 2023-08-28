import React from 'react'
import { useDataContext } from '../hooks/useDataContext';


function Album({
  index,
  imageURL,
  albumName,
  artistName,
  release_date,

}) {

  const { dispatch } = useDataContext()

  return (
    <div
      style={{
        backgroundColor: 'grey',
        height: '180px',
        width: '127px',
        margin: '0px 0px -21px 0px',
        borderRadius: '5px',
      }}
    >

      <img
        src={imageURL}
        style={{
          borderRadius: '5px',
          margin: '2px',
          width: '100%',
          padding: '8px 12px 8px 8px',
        }}
      />
        {release_date}

    </div>
  )
}

export default Album