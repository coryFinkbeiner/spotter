import React from 'react'
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
                imageURL,
                albumName,
                artistName,
                totalTracks: item.total_tracks,
                tracks: response.data.items,

              }
            })
            dispatch({ type:'CHANGE_VIEW_TYPE', payload: 'AlbumView' })
            // console.log(response.data);
          } catch (error) {
            console.log('fetch album tracks Error:', error);
          }
        };
        fetchData()






      }}
      style={{
        backgroundColor: 'grey',
        height: '177px',
        width: '127px',
        margin: '0px 0px -21px 0px',
        borderRadius: '5px',
        padding: '8px 8px 8px 8px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
      }}
    >

      <img
        src={imageURL}
        style={{
          borderRadius: '5px',
          // margin: '2px',
          width: '100%',
          paddingBottom: '6px',

        }}
      />
        <div
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '15px',
            paddingBottom: '2px'
          }}
        >
          {albumName}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: 'lightgrey',
            fontSize: '12px',
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