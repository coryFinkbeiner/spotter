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
        padding: '8px 8px 8px 8px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >

      <img
        src={imageURL}
        style={{
          borderRadius: '5px',
          // margin: '2px',
          width: '100%',

        }}
      />
        <div
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          {albumName}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: 'lightgrey'
          }}
        >
          <div>
            {release_date.split('-')[0]}
          </div>
          <div>
            {artistName}
          </div>
        </div>

    </div>
  )
}

export default Album