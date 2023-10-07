import React, {useState} from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { BsFillPlayFill } from "react-icons/bs"

function Track({
  index,
  image,
  trackName,
  artistName,
  albumName,
  duration_ms,
  uri
}) {
  const { dispatch } = useDataContext()
  const [isHovering, setIsHovering] = useState(false);

  const TrackContainer = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '5px',
    backgroundColor: isHovering ? 'rgb(40, 40, 40)' : 'transparent'
  }


  return (
    <div
      onClick={() =>
        dispatch({
          type: 'ADD_TO_QUEUE',
          payload: {
            image,
            trackName,
            artistName,
            albumName,
            duration_ms,
            uri
          }
        }
      )}
      style={TrackContainer}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        style={{
          padding: '15px',
          color: 'grey',
        }}
      >
        {isHovering ?

          <BsFillPlayFill
            style={{
              color: 'white',
              fontSize: '20px'
            }}
          />

        : index + 1

        }
      </div>
      <img
        src={image}
        style={{
          height: '44px',
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