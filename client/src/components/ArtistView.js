import { useDataContext } from '../hooks/useDataContext';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArtistView() {
  const { inView, accessToken } = useDataContext()

  const [ popularSongs, setPopularSongs ] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumsResponse = await axios.get(`https://api.spotify.com/v1/artists/${inView.id}/albums`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        // console.log('artist albums response.data', albumsResponse.data);



        const topTracksResponse = await axios.get(`https://api.spotify.com/v1/artists/${inView.id}/top-tracks`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            market: 'US',
          },
        });
        // console.log('top-tracks response.data', topTracksResponse.data);

        setPopularSongs(topTracksResponse.data.tracks)

      } catch (error) {
        console.log('Error fetching artist data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        margin: '6px',
        padding: '2px',
        height: '100vh',
        borderRadius: '8px'
      }}
    >

      {/* Top */}
      <div
        style={{
          height: '230px',
          width: '100%',
          margin: '2px',
          padding: '4px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: `url(${inView.imageURL})`,
            backgroundSize: 'contain',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
          }}
        ></div>
        <div
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '0',
            left: '0',
            margin: '12px',
            padding: '2px',
            fontWeight: 'bold',
            fontSize: '60px',
          }}
        >
          {inView.artistName}
        </div>
      </div>

      {/* Popular Songs */}





    </div>
  )
}

export default ArtistView