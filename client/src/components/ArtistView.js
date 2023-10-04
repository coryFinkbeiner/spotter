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
          margin: '2px',
          padding: '4px',
          background: `url(${inView.imageURL})`,
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
       <div>Artist Name</div>
      </div>




      {/* <div
        style={{
          height: '230px',
          margin: '2px',
          padding: '4px',
          display: 'flex',
          flex: 'row',
        }}
      >
        <img
          src={inView.imageURL}
          style={{
            borderRadius: '50%',
            margin: '12px'
          }}
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
            <div style={{
              fontWeight: 'bold',
              fontSize: '80px'
            }}
            >
              {inView.artistName}
            </div>
          </div>
        </div>
      </div> */}



    </div>
  )
}

export default ArtistView