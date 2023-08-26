import React from 'react'

function Track({ image, trackName, artistName, albumName, duration_ms }) {
  return (
    <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px',
          }}
        >
          <div
            style={{
              padding: '15px',
              color: 'grey',
            }}
          >
            {index + 1}
          </div>
          <img
            src={image}
            style={{
              height: '38px',
              borderRadius: '3px',
              margin: '2px',
            }}
          />
          <div
            style={{
              width: '225px'
            }}
          >
            <div
              style={{
                color: 'white',
                paddingRight: '15px',
                paddingLeft: '15px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',

              }}
            >
              {trackName}
            </div>
            <div
              style={{
                color: 'grey',
                paddingRight: '15px',
                paddingLeft: '15px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize: '13px'
              }}
            >
              {artistName}
            </div>
          </div>
          <div
            style={{
              color: 'grey',
              paddingRight: '15px',
              paddingLeft: '15px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: '13px',
              width: '160px'

            }}
          >
            {albumName}
          </div>
          <div
            style={{
              color: 'grey',
              fontSize: '13px',
            }}
          >
            3:30
          </div>
        </div>
  )
}

export default Track