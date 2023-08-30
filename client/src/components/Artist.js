import React, { useState } from 'react'
import { useDataContext } from '../hooks/useDataContext';

function Artist({
  index,
  imageURL,
  artistName,
  item,
  id
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      style={{
        backgroundColor: isHovering ? 'rgb(44, 44, 44)' : 'rgb(28, 28, 28)',
        height: '174px',
        width: '127px',
        margin: '0px 0px -18px 0px',
        borderRadius: '5px',
        padding: '8px 8px 8px 8px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={imageURL}
        style={{
          borderRadius: '5px',
          width: '100%',
          paddingBottom: '9px',

        }}
      />
        <div
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '13px',
            paddingBottom: '3px'
          }}
        >
          {artistName}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: 'lightgrey',
            fontSize: '10px',
          }}
        >
          <div
            style={{

            }}
          >
            Artist
        </div>
      </div>
    </div>
  )
}

export default Artist