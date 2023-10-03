import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArtistView() {

  const { inView, accessToken } = useDataContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumsResponse = await axios.get(`https://api.spotify.com/v1/artists/${inView.id}/albums`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log('artist albums response.data', albumsResponse.data);

        const topTracksResponse = await axios.get(`https://api.spotify.com/v1/artists/${inView.id}/top-tracks`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            market: 'US',
          },
        });
        console.log('top-tracks response.data', topTracksResponse.data);

      } catch (error) {
        console.log('Error fetching artist data:', error);
      }
    };

    fetchData();

  }, []);


  return (


    <div className='AlbumPlaylistView'>
      <div className='view-top'>
        <img className='view-top-img'
          src={"https://i.scdn.co/image/ab67616d0000b273ad27e16c5f844ea1ad6797cd"}
        />
        <div
          style={{
            margin: '12px',
            marginLeft: '9px',
            padding: '2px',
            marginTop: '80px'
          }}
        >
          <div
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              fontSize: '15px',
              textOverflow: 'ellipsis',
              color: 'white',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div style={{fontWeight: 'bold'}}
            >
              {inView.artistName}
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default ArtistView