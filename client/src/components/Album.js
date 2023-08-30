import React, {useState} from 'react'
import { useDataContext } from '../hooks/useDataContext';
import axios from 'axios'


function Album({
  index,
  imageURL,
  albumName,
  artistName,
  release_date,
  item,
  id

}) {
  const { dispatch, accessToken } = useDataContext()
  const [isHovering, setIsHovering] = useState(false);
  const Container = {
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
  }

  return (
    <div
      onClick={() => {

        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.spotify.com/v1/albums/' + id + '/tracks', {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            dispatch({
              type: 'VIEW_IN_CONSOLE', payload: {
                imageURL: item.images[0].url,
                albumName,
                artistName,
                totalTracks: item.total_tracks,
                tracks: response.data.items,
                year: release_date.split('-')[0],
              }
            })
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'AlbumView' })
          } catch (error) {
            console.log('fetch album tracks Error:', error);
          }
        };
        fetchData()
      }}
      style={Container}
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
          {albumName}
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
            {release_date.split('-')[0] + ' '} &#x2022; {' ' + artistName}
          </div>
        </div>

    </div>
  )
}

export default Album