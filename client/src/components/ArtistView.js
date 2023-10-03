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
    <div>{inView.artistName}</div>
  )
}

export default ArtistView